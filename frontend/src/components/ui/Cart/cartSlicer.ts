// @path: src/components/ui/Cart/cartSlicer.ts
// Toolkit import
import { createSlice } from "@reduxjs/toolkit";
// Type import
import type { IProducts } from "../../../core/interfaces/Products";
import type { RootState } from "../../../app/store";

interface IProductInCart {
  product: IProducts | null;
  lot: number;
}

export type CartState = {
  cartContent: IProductInCart[];
  invoice: number;
};

const initialState: CartState = {
  cartContent: [],
  invoice: 0,
};

const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartContent.find(
        (content) => content.product?.id === action.payload.id,
      );

      if (item) {
        item.lot += 1;
      } else {
        state.cartContent.push({
          product: action.payload,
          lot: 1,
        });
      }

      state.invoice += Math.round(action.payload.price * 100);
    },
    removeOne: (state, action) => {
      const itemIndex = state.cartContent.findIndex(
        (content) => content.product?.id === action.payload.id,
      );

      if (itemIndex === -1) return;

      if (state.cartContent[itemIndex].lot > 1) {
        state.cartContent[itemIndex].lot -= 1;
      } else {
        state.cartContent.splice(itemIndex, 1);
      }

      state.invoice -= Math.round(action.payload.price * 100);
    },
    removeAll: (state, action) => {
      const itemIndex = state.cartContent.findIndex(
        (content) => content.product?.id === action.payload.id,
      );

      if (itemIndex === -1) return;

      const reductionPrice =
        Math.round((state.cartContent[itemIndex].product?.price ?? 0) * 100) *
        state.cartContent[itemIndex].lot;

      state.cartContent.splice(itemIndex, 1);

      state.invoice -= Math.round(reductionPrice);
    },
    removeCart: (state) => {
      state.cartContent = [];
      state.invoice = 0;
    },
  },
});

export const { addToCart, removeOne, removeAll, removeCart } =
  cartSlicer.actions;
export const cart = (state: RootState) => state.cart;
export default cartSlicer.reducer;

// Util functions
export const isInCart = (state: RootState, productId: number) => {
  return state.cart.cartContent.some(
    (content) => content.product?.id === productId,
  );
};

export const noInCart = (state: RootState, productId: number) => {
  const foundItem = state.cart.cartContent.findIndex(
    (content) => content.product?.id === productId,
  );

  if (foundItem === -1) return;
  else {
    return state.cart.cartContent[foundItem].lot;
  }
};
