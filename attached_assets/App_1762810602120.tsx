import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { mindMapXmlString } from './constants';
import type { MindMapNodeData, LayoutNode, Connector } from './types';
import MindMapNode, { PADDING_X } from './components/MindMapNode';

// Helper function to parse XML and build the tree structure
const parseMindMapXml = (xmlString: string): MindMapNodeData | null => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "application/xml");

  const buildNodeTree = (xmlNode: Element): MindMapNodeData => {
    const children = Array.from(xmlNode.children)
      .filter(child => child.tagName === 'node')
      .map(childNode => buildNodeTree(childNode as Element));

    return {
      id: xmlNode.getAttribute('id') || '',
      text: xmlNode.getAttribute('text') || '',
      level: parseInt(xmlNode.getAttribute('level') || '0', 10),
      children: children,
    };
  };

  const rootElement = xmlDoc.querySelector('mindmap > node');
  if (rootElement) {
    return buildNodeTree(rootElement);
  }

  return null;
};

// Layout constants
const NODE_HEIGHT = 40;
const HORIZONTAL_SPACING = 90;
const VERTICAL_SPACING = 20;
const FONT_SIZE = 14;
const CHAR_WIDTH = FONT_SIZE * 0.65;
const TOGGLE_WIDTH = 40;

const App: React.FC = () => {
  const [mindMapData, setMindMapData] = useState<MindMapNodeData | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  // State and refs for zoom and pan
  const [transform, setTransform] = useState({ scale: 1, translateX: 0, translateY: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0, translateX: 0, translateY: 0 });
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const initialCenterDone = useRef(false);

  useEffect(() => {
    const data = parseMindMapXml(mindMapXmlString);
    if (data) {
      setMindMapData(data);
      // Automatically expand the root node and its direct children
      const initialExpanded = new Set<string>();
      initialExpanded.add(data.id);
      data.children.forEach(child => initialExpanded.add(child.id));
      setExpandedNodes(initialExpanded);
    }
  }, []);

  const toggleNode = useCallback((nodeId: string) => {
    setExpandedNodes(prevExpanded => {
      const newExpanded = new Set(prevExpanded);
      if (newExpanded.has(nodeId)) {
        newExpanded.delete(nodeId);
      } else {
        newExpanded.add(nodeId);
      }
      return newExpanded;
    });
  }, []);

  const handleExpandAll = useCallback(() => {
    if (!mindMapData) return;
    const allNodeIds = new Set<string>();
    const traverse = (node: MindMapNodeData) => {
      if (node.children && node.children.length > 0) {
        allNodeIds.add(node.id);
        node.children.forEach(traverse);
      }
    };
    traverse(mindMapData);
    setExpandedNodes(allNodeIds);
  }, [mindMapData]);

  const handleCollapseAll = useCallback(() => {
    if (!mindMapData) return;
    setExpandedNodes(new Set([mindMapData.id]));
  }, [mindMapData]);

  const { flatNodes, connectors, width, height } = useMemo(() => {
    if (!mindMapData) return { flatNodes: [], connectors: [], width: 0, height: 0 };
    
    const nodes: LayoutNode[] = [];
    const conns: Connector[] = [];
    
    function calculateSubtreeHeight(node: MindMapNodeData): number {
        if (node.children.length === 0 || !expandedNodes.has(node.id)) {
            return NODE_HEIGHT;
        }
        const childrenHeight = node.children
            .map(calculateSubtreeHeight)
            .reduce((sum, h) => sum + h, 0);
        return childrenHeight + (node.children.length - 1) * VERTICAL_SPACING;
    }

    function layout(node: MindMapNodeData, x: number, y: number): void {
        const nodeWidth = PADDING_X * 2 + TOGGLE_WIDTH + node.text.length * CHAR_WIDTH;
        nodes.push({ ...node, x, y, width: nodeWidth, height: NODE_HEIGHT });

        if (node.children.length > 0 && expandedNodes.has(node.id)) {
            const totalChildrenHeight = calculateSubtreeHeight(node);
            let currentY = y - totalChildrenHeight / 2;

            for (const child of node.children) {
                const childSubtreeHeight = calculateSubtreeHeight(child);
                const childCenterY = currentY + childSubtreeHeight / 2;
                
                layout(child, x + nodeWidth + HORIZONTAL_SPACING, childCenterY);

                const startX = x + nodeWidth;
                const startY = y;
                const endX = x + nodeWidth + HORIZONTAL_SPACING;
                const endY = childCenterY;
                const controlX1 = startX + HORIZONTAL_SPACING / 2;
                const controlX2 = endX - HORIZONTAL_SPACING / 2;
                
                conns.push({
                    id: `${node.id}-${child.id}`,
                    path: `M ${startX},${startY} C ${controlX1},${startY} ${controlX2},${endY} ${endX},${endY}`
                });
                
                currentY += childSubtreeHeight + VERTICAL_SPACING;
            }
        }
    }
    
    const totalHeight = calculateSubtreeHeight(mindMapData);
    layout(mindMapData, 50, totalHeight / 2);

    let maxX = 0;
    nodes.forEach(n => {
        if (n.x + n.width > maxX) maxX = n.x + n.width;
    });

    return { flatNodes: nodes, connectors: conns, width: maxX + 100, height: totalHeight + 100 };

  }, [mindMapData, expandedNodes]);

  // Effect for initial centering
  useEffect(() => {
    if (!initialCenterDone.current && width > 0 && height > 0 && svgContainerRef.current) {
        const container = svgContainerRef.current;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        
        const totalContentHeight = height - 100;

        const initialTranslateX = (containerWidth / 2) - 50; // Root node starts at x=50
        const initialTranslateY = (containerHeight / 2) - (totalContentHeight / 2);

        setTransform(t => ({ ...t, translateX: initialTranslateX, translateY: initialTranslateY }));
        initialCenterDone.current = true;
    }
  }, [width, height]);
  
  // Zoom handler
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    if (!svgContainerRef.current) return;

    const zoomFactor = 1.05; // Reduced zoom sensitivity
    const newScale = e.deltaY > 0 ? transform.scale / zoomFactor : transform.scale * zoomFactor;
    const clampedScale = Math.max(0.2, Math.min(newScale, 3));

    const rect = svgContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const newTranslateX = mouseX - (mouseX - transform.translateX) * (clampedScale / transform.scale);
    const newTranslateY = mouseY - (mouseY - transform.translateY) * (clampedScale / transform.scale);

    setTransform({
      scale: clampedScale,
      translateX: newTranslateX,
      translateY: newTranslateY,
    });
  }, [transform]);

  // Pan handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    // Prevent panning when clicking on a node's toggle button or control buttons
    if ((e.target as HTMLElement).closest('.cursor-pointer, button')) {
        return;
    }
    e.preventDefault();
    setIsPanning(true);
    panStart.current = {
      x: e.clientX,
      y: e.clientY,
      translateX: transform.translateX,
      translateY: transform.translateY,
    };
  }, [transform]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning) return;
    e.preventDefault();

    const dx = e.clientX - panStart.current.x;
    const dy = e.clientY - panStart.current.y;

    setTransform({
      scale: transform.scale,
      translateX: panStart.current.translateX + dx,
      translateY: panStart.current.translateY + dy,
    });
  }, [isPanning, transform.scale]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  return (
    <div
      ref={svgContainerRef}
      className={`relative w-full h-screen bg-black overflow-hidden select-none ${isPanning ? 'cursor-grabbing' : 'cursor-grab'}`}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <button
          onClick={handleExpandAll}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition-colors"
          aria-label="Expand all nodes"
        >
          Mở rộng tất cả
        </button>
        <button
          onClick={handleCollapseAll}
          className="px-4 py-2 bg-rose-500 text-white rounded-lg shadow-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-75 transition-colors"
          aria-label="Collapse all nodes to level one"
        >
          Thu gọn tất cả
        </button>
      </div>

      <svg width="100%" height="100%" className="font-sans">
        <g transform={`translate(${transform.translateX}, ${transform.translateY}) scale(${transform.scale})`}>
          {connectors.map(c => (
            <path 
              key={c.id} 
              d={c.path} 
              fill="none" 
              stroke="#818cf8" // Lavender connector color
              strokeWidth="1.5"
            />
          ))}
          {flatNodes.map(n => (
            <MindMapNode
              key={n.id}
              node={n}
              isExpanded={expandedNodes.has(n.id)}
              onToggle={toggleNode}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default App;