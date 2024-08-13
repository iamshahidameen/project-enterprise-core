import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  items: string[];
}

const initialState: MenuState = {
  items: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
