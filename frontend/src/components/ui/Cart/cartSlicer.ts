// @path: src/components/ui/Cart/cartSlicer.ts
import { createSlice } from "@reduxjs/toolkit";
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

      state.invoice += action.payload.price;
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

      state.invoice -= action.payload.price;
    },
    removeAll: (state, action) => {
      const itemIndex = state.cartContent.findIndex(
        (content) => content.product?.id === action.payload.id,
      );

      if (itemIndex === -1) return;

      const reductionPrice =
        (state.cartContent[itemIndex].product?.price ?? 0) *
        state.cartContent[itemIndex].lot;
      state.cartContent.splice(itemIndex, 1);
      state.invoice -= reductionPrice;
    },
    removeCart: (state) => {
      state.cartContent = [];
      state.invoice = 0;
    },
  },
});

export const { addToCart, removeOne, removeAll, removeCart } =
  cartSlicer.actions;
export const cart = (state: RootState) => state;
export default cartSlicer.reducer;
