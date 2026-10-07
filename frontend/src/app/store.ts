// @path: src/app/store.ts
// React Redux Toolkit import
import { configureStore } from "@reduxjs/toolkit";

// Slice import
import cartReducer from "../components/ui/Cart/cartSlicer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
