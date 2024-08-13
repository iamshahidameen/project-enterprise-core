import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import appReducer from './appSlice';


const store = configureStore({
    reducer: {
        menu: menuReducer,
        app: appReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
