// @path: src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/ui/Cart/cartSlicer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
