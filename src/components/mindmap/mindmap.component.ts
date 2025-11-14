
import { Component, OnInit, signal, ElementRef, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3';

interface MindMapNode {
  id: string;
  text: string;
  level: number;
  children: MindMapNode[];
  expanded: boolean;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface Connector {
  id: string;
  path: string;
}

@Component({
  selector: 'app-mindmap',
  standalone: true,
  templateUrl: './mindmap.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MindmapComponent implements OnInit, AfterViewInit {
  @ViewChild('mindmapContainer', { static: false }) mindmapContainer!: ElementRef;
  
  rootNode = signal<MindMapNode | null>(null);
  loading = signal<boolean>(true);

  private svg: any;
  private g: any;
  private zoom: any;
  private expandedNodes = new Set<string>();

  // Layout constants
  private readonly NODE_HEIGHT = 40;
  private readonly HORIZONTAL_SPACING = 90;
  private readonly VERTICAL_SPACING = 20;
  private readonly PADDING_X = 20;
  private readonly TOGGLE_WIDTH = 40;
  private readonly CHAR_WIDTH = 8.5;

  // Color palettes
  private readonly levelBackgroundColors = [
    '#c7d2fe', '#99f6e4', '#fecdd3', '#fde68a',
    '#bae6fd', '#f5d0fe', '#d9f99d'
  ];

  private readonly levelTextColors = [
    '#3730a3', '#134e4a', '#881337', '#92400e',
    '#0c4a6e', '#701a75', '#3f6212'
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMindMap();
  }

  ngAfterViewInit() {
    if (this.rootNode()) {
      this.initializeSVG();
      this.renderMindMap();
    }
  }

  async loadMindMap() {
    try {
      const xmlText = await this.http.get('/gio-trnh-ch-ngha-x-hi-khoa-hc-2025-11-10T19-03_1762804717820.xml', { 
        responseType: 'text' 
      }).toPromise();
      
      if (xmlText) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const firstNode = xmlDoc.querySelector('mindmap > node');
        const root = firstNode ? this.parseXMLNode(firstNode) : this.parseXMLNode(xmlDoc.documentElement);
        this.rootNode.set(root);
        
        // Initialize expanded nodes (root and first level)
        this.expandedNodes.add(root.id);
        root.children.forEach(child => this.expandedNodes.add(child.id));
        
        setTimeout(() => {
          this.initializeSVG();
          this.renderMindMap();
        }, 100);
      }
    } catch (error) {
      console.error('Error loading mindmap:', error);
    } finally {
      this.loading.set(false);
    }
  }

  private parseXMLNode(element: Element): MindMapNode {
    const id = element.getAttribute('id') || '';
    const text = element.getAttribute('text') || '';
    const level = parseInt(element.getAttribute('level') || '0');
    
    const children: MindMapNode[] = [];
    const childNodes = element.querySelectorAll(':scope > node');
    
    childNodes.forEach(child => {
      children.push(this.parseXMLNode(child as Element));
    });

    return { id, text, level, children, expanded: true };
  }

  private initializeSVG() {
    if (!this.mindmapContainer) return;

    const container = this.mindmapContainer.nativeElement;
    const width = container.clientWidth || 1200;
    const height = container.clientHeight || 800;

    d3.select(container).selectAll('*').remove();

    this.svg = d3.select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background', '#ffffff');

    this.zoom = d3.zoom()
      .scaleExtent([0.2, 3])
      .on('zoom', (event) => {
        this.g.attr('transform', event.transform);
      });

    this.svg.call(this.zoom);
    this.g = this.svg.append('g');

    const initialTransform = d3.zoomIdentity
      .translate(100, height / 2)
      .scale(0.8);
    
    this.svg.call(this.zoom.transform, initialTransform);
  }

  private calculateSubtreeHeight(node: MindMapNode): number {
    if (node.children.length === 0 || !this.expandedNodes.has(node.id)) {
      return this.NODE_HEIGHT;
    }
    const childrenHeight = node.children
      .map(child => this.calculateSubtreeHeight(child))
      .reduce((sum, h) => sum + h, 0);
    return childrenHeight + (node.children.length - 1) * this.VERTICAL_SPACING;
  }

  private layoutNodes(node: MindMapNode, x: number, y: number, nodes: any[], connectors: Connector[]) {
    const nodeWidth = this.PADDING_X * 2 + this.TOGGLE_WIDTH + node.text.length * this.CHAR_WIDTH;
    node.x = x;
    node.y = y;
    node.width = nodeWidth;
    node.height = this.NODE_HEIGHT;
    
    nodes.push(node);

    if (node.children.length > 0 && this.expandedNodes.has(node.id)) {
      const totalChildrenHeight = this.calculateSubtreeHeight(node);
      let currentY = y - totalChildrenHeight / 2;

      for (const child of node.children) {
        const childSubtreeHeight = this.calculateSubtreeHeight(child);
        const childCenterY = currentY + childSubtreeHeight / 2;
        
        this.layoutNodes(child, x + nodeWidth + this.HORIZONTAL_SPACING, childCenterY, nodes, connectors);

        const startX = x + nodeWidth;
        const startY = y;
        const endX = x + nodeWidth + this.HORIZONTAL_SPACING;
        const endY = childCenterY;
        const controlX1 = startX + this.HORIZONTAL_SPACING / 2;
        const controlX2 = endX - this.HORIZONTAL_SPACING / 2;
        
        connectors.push({
          id: `${node.id}-${child.id}`,
          path: `M ${startX},${startY} C ${controlX1},${startY} ${controlX2},${endY} ${endX},${endY}`
        });
        
        currentY += childSubtreeHeight + this.VERTICAL_SPACING;
      }
    }
  }

  private renderMindMap() {
    if (!this.rootNode() || !this.g) return;

    const root = this.rootNode()!;
    const nodes: any[] = [];
    const connectors: Connector[] = [];

    const totalHeight = this.calculateSubtreeHeight(root);
    this.layoutNodes(root, 50, totalHeight / 2, nodes, connectors);

    // Draw connectors
    this.g.selectAll('.link')
      .data(connectors, (d: any) => d.id)
      .join('path')
      .attr('class', 'link')
      .attr('d', (d: Connector) => d.path)
      .attr('fill', 'none')
      .attr('stroke', '#4f46e5')
      .attr('stroke-width', 2);

    // Draw nodes
    const nodeGroups = this.g.selectAll('.node')
      .data(nodes, (d: any) => d.id)
      .join('g')
      .attr('class', 'node')
      .attr('transform', (d: any) => `translate(${d.x},${d.y})`);

    // Node rectangles
    nodeGroups.selectAll('rect.node-bg')
      .data((d: any) => [d])
      .join('rect')
      .attr('class', 'node-bg')
      .attr('x', 0)
      .attr('y', (d: any) => -d.height / 2)
      .attr('width', (d: any) => d.width)
      .attr('height', (d: any) => d.height)
      .attr('rx', 8)
      .attr('fill', (d: any) => this.getNodeColor(d.level))
      .style('cursor', 'default');

    // Node text
    nodeGroups.selectAll('text.node-text')
      .data((d: any) => [d])
      .join('text')
      .attr('class', 'node-text')
      .attr('x', this.PADDING_X)
      .attr('y', 0)
      .attr('text-anchor', 'start')
      .attr('dominant-baseline', 'middle')
      .attr('fill', (d: any) => this.getTextColor(d.level))
      .attr('font-size', '14px')
      .attr('font-weight', '500')
      .style('pointer-events', 'none')
      .text((d: any) => d.text);

    // Toggle buttons
    nodeGroups.each((d: any, i: number, nodes: any) => {
      if (d.children && d.children.length > 0) {
        const group = d3.select(nodes[i]);
        
        const toggleGroup = group.selectAll('g.toggle-button')
          .data([d])
          .join('g')
          .attr('class', 'toggle-button')
          .attr('transform', `translate(${d.width - this.PADDING_X}, 0)`)
          .style('cursor', 'pointer')
          .on('click', (event: any) => {
            event.stopPropagation();
            this.toggleNode(d.id);
          });

        toggleGroup.selectAll('circle')
          .data([d])
          .join('circle')
          .attr('r', 10)
          .attr('fill', 'rgba(0, 0, 0, 0.1)');

        toggleGroup.selectAll('text')
          .data([d])
          .join('text')
          .attr('x', 0)
          .attr('y', 1)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('fill', (d: any) => this.getTextColor(d.level))
          .attr('font-size', '16px')
          .attr('font-weight', 'bold')
          .style('pointer-events', 'none')
          .text((d: any) => this.expandedNodes.has(d.id) ? '−' : '+');
      }
    });
  }

  private toggleNode(nodeId: string) {
    if (this.expandedNodes.has(nodeId)) {
      this.expandedNodes.delete(nodeId);
    } else {
      this.expandedNodes.add(nodeId);
    }
    this.renderMindMap();
  }

  expandAll() {
    const traverse = (node: MindMapNode) => {
      if (node.children && node.children.length > 0) {
        this.expandedNodes.add(node.id);
        node.children.forEach(traverse);
      }
    };
    if (this.rootNode()) {
      traverse(this.rootNode()!);
      this.renderMindMap();
    }
  }

  collapseAll() {
    if (this.rootNode()) {
      this.expandedNodes.clear();
      this.expandedNodes.add(this.rootNode()!.id);
      this.renderMindMap();
    }
  }

  private getNodeColor(level: number): string {
    return this.levelBackgroundColors[Math.min(level, this.levelBackgroundColors.length - 1)];
  }

  private getTextColor(level: number): string {
    return this.levelTextColors[Math.min(level, this.levelTextColors.length - 1)];
  }
}
