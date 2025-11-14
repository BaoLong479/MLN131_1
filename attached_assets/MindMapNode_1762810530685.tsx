import React from 'react';
import type { LayoutNode } from '../types';

interface MindMapNodeProps {
  node: LayoutNode;
  isExpanded: boolean;
  onToggle: (nodeId: string) => void;
}

// Color palettes for different levels
const levelBackgroundColors = [
    '#c7d2fe', // Level 0 (Root) - Indigo
    '#99f6e4', // Level 1 - Teal
    '#fecdd3', // Level 2 - Rose
    '#fde68a', // Level 3 - Amber
    '#bae6fd', // Level 4 - Sky
    '#f5d0fe', // Level 5 - Fuchsia
    '#d9f99d', // Level 6 - Lime
];

const levelTextColors = [
    '#3730a3', // Level 0 - Dark Indigo
    '#134e4a', // Level 1 - Dark Teal
    '#881337', // Level 2 - Dark Rose
    '#92400e', // Level 3 - Dark Amber
    '#0c4a6e', // Level 4 - Dark Sky
    '#701a75', // Level 5 - Dark Fuchsia
    '#3f6212', // Level 6 - Dark Lime
];

export const PADDING_X = 20;

const MindMapNode: React.FC<MindMapNodeProps> = ({ node, isExpanded, onToggle }) => {
    const { x, y, width, height, text, level, children } = node;
    const hasChildren = children && children.length > 0;
    
    const bgColor = levelBackgroundColors[level] || levelBackgroundColors[levelBackgroundColors.length - 1];
    const textColor = levelTextColors[level] || levelTextColors[levelTextColors.length - 1];

    return (
        <g transform={`translate(${x}, ${y})`} style={{ transition: 'transform 0.3s ease-out' }}>
            <rect 
                x={0} 
                y={-height / 2} 
                width={width} 
                height={height} 
                rx="8" 
                ry="8"
                fill={bgColor}
            />
            <text
                x={PADDING_X}
                y={0}
                textAnchor="start"
                dominantBaseline="middle"
                fill={textColor}
                fontSize="14"
                fontWeight="500"
                fontFamily="sans-serif"
            >
                {text}
            </text>
            
            {hasChildren && (
                <g 
                    transform={`translate(${width - PADDING_X}, 0)`}
                    onClick={(e) => { e.stopPropagation(); onToggle(node.id); }}
                    className="cursor-pointer"
                    aria-label={`Toggle ${node.text}`}
                    role="button"
                >
                    <circle r="10" fill="#ffffff77" />
                     <text
                        x={0}
                        y={1}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={textColor}
                        fontSize="16"
                        fontWeight="bold"
                        style={{ pointerEvents: 'none', userSelect: 'none' }}
                    >
                        {isExpanded ? '−' : '+'}
                    </text>
                </g>
            )}
        </g>
    );
};

export default MindMapNode;
