import React from 'react';
import FlowDiagramV1 from '../components/FlowDiagrams/FlowDiagramV1';
import FlowDiagramV2 from '../components/FlowDiagrams/FlowDiagramV2';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const FlowDiagrams = () => {
  const currentDiagram = useSelector((state: RootState) => state.app.diagram);

  return <>{currentDiagram === 'v1' ? <FlowDiagramV1 /> : <FlowDiagramV2 />}</>;
};

export default FlowDiagrams;
