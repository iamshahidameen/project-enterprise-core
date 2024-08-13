import { useCallback, useState } from 'react';
import {
  ReactFlow,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import initialNodes from '../../config/react_flow/reactFlowNodesV1';
import initialEdges from '../../config/react_flow/reactFlowEdgesV1';
import { Box } from '@mui/material';

const rfStyle = {
  backgroundColor: 'rgb(26 78 71)',
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: any) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <Box
      className="flow__diagram--wrapper"
      style={{ margin: '0 !important' }}
      sx={{
        width: '100%',
        height: '100%',

        m: '0',
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={rfStyle}
        attributionPosition="top-right"
      ></ReactFlow>
    </Box>
  );
}

export default Flow;
