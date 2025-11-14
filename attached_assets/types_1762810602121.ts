export interface MindMapNodeData {
  id: string;
  text: string;
  level: number;
  children: MindMapNodeData[];
}

export interface LayoutNode extends MindMapNodeData {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface Connector {
    id: string;
    path: string;
}
