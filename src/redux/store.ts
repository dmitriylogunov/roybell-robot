import { configureStore } from "@reduxjs/toolkit";
import robotReducer from "./robotSlice";

const store = configureStore({
  reducer: {
    robot: robotReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
