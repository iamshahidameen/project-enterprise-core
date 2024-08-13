import { type Node } from '@xyflow/react';

const nodes: Node[] = [
  {
    id: 'A',
    type: 'group',
    data: { label: 'Child Node 0' },
    position: { x: 80, y: 0 },
    style: {
      width: 170,
      height: 140,
    },
  },
  {
    id: 'A-1',
    type: 'input',
    data: { label: 'Child Node 1' },
    position: { x: 10, y: 10 },
    parentId: 'A',
    extent: 'parent',
  },
  {
    id: 'A-2',
    data: { label: 'Child Node 2' },
    position: { x: 10, y: 90 },
    parentId: 'A',
    extent: 'parent',
  },
  {
    id: 'B',
    type: 'output',
    position: { x: -100, y: 200 },
    data: { label: 'Node B' },
  },
  {
    id: 'C',
    type: 'output',
    position: { x: 100, y: 200 },
    data: { label: 'Node C' },
  },
  {
    id: 'D',
    type: 'input',
    position: { x: 300, y: 200 },
    data: { label: 'Node A' },
  },
];

export default nodes;
