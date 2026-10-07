// @path: src/components/ui/ProductCard/ProductCard.tsx
import type { IProducts } from "../../../core/interfaces/Products";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import {
  addToCart,
  cart,
  isInCart,
  noInCart,
  removeAll,
  removeOne,
} from "../Cart/cartSlicer";
import { FaTrashCan } from "react-icons/fa6";

export const ProductCard = ({ product }: { product: IProducts }) => {
  const useAppDispatch = useDispatch.withTypes<AppDispatch>();
  const useAppState = useSelector.withTypes<RootState>();

  const dispatch = useAppDispatch();
  const state = useAppState(cart);

  const isItemInCart = isInCart(state, product.id);
  const quantityInCart = noInCart(state, product.id);

  return (
    <div id={`${product.id}`}>
      {isItemInCart && (
        <button onClick={() => dispatch(removeAll(product))}>
          <FaTrashCan />
        </button>
      )}
      <img
        className="max-h-75 max-w-75"
        src={product.thumbnail}
        alt="Product Thumbnail"
      />
      {product.inStock < 10 ? (
        <p>Only {product.inStock} left in stock!</p>
      ) : (
        <p>{product.inStock} in stock!</p>
      )}
      {isItemInCart && (
        <>
          <button onClick={() => dispatch(removeOne(product))}>-</button>
          <p>In cart: {quantityInCart}</p>
          <button onClick={() => dispatch(addToCart(product))}>+</button>
        </>
      )}
      {!isItemInCart && (
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      )}
    </div>
  );
};
