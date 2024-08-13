import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IsharedState {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
  shared?: string;
  company?: string;
}

interface AppState {
  sharedState: IsharedState;
  version: string;
  diagram?: string;
}

const initialState: AppState = {
  sharedState: {
    firstName: '',
    lastName: '',
    email: '',
    terms: false,
  },
  version: 'v1',
  diagram: 'v1',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSharedState: (state, action: PayloadAction<IsharedState>) => {
      state.sharedState = { ...state.sharedState, ...action.payload };
    },
    changeFormVersion: (state, action: PayloadAction<string>) => {
      state.version = action.payload;
    },
    changeFlowDiagram: (state, action: PayloadAction<string>) => {
      state.diagram = action.payload;
    },
  },
});

export const { setSharedState, changeFormVersion, changeFlowDiagram } =
  appSlice.actions;
export default appSlice.reducer;
