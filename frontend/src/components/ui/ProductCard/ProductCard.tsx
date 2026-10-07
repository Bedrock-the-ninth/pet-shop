// @path: src/components/ui/ProductCard/ProductCard.tsx
import type { IProducts } from "../../../core/interfaces/Products";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import {
  addToCart,
  isInCart,
  noInCart,
  removeAll,
  removeOne,
} from "../Cart/cartSlicer";
import { FaTrashCan } from "react-icons/fa6";
import { useId } from "react";
import ProductCardClassStyles from "./productCard.styles";

export const ProductCard = ({ product }: { product: IProducts }) => {
  const useAppDispatch = useDispatch.withTypes<AppDispatch>();
  const useAppState = useSelector.withTypes<RootState>();

  const dispatch = useAppDispatch();

  const isItemInCart = useAppState((state) => isInCart(state, product.id));
  const quantityInCart = useAppState((state) => noInCart(state, product.id));

  const randomId = `${useId()}_${product.id}`;
  return (
    <div className={ProductCardClassStyles.mainDivClass} id={randomId}>
      {/* Remove everything from cart */}
      {isItemInCart && (
        <button
          className={ProductCardClassStyles.trashCanButtonClass}
          onClick={() => dispatch(removeAll(product))}
          aria-label={`Remove ${product.name} from cart`}
        >
          <FaTrashCan />
        </button>
      )}

      {/* Product image */}
      <div className={ProductCardClassStyles.imageDivClass}>
        <img
          className={ProductCardClassStyles.imageTagClass}
          src={product.thumbnail}
          alt={product.name}
        />
      </div>

      {/* Product information */}
      <div className={ProductCardClassStyles.productInfo.mainDivClass}>
        <h2 className={ProductCardClassStyles.productInfo.titleClass}>
          {product.name}
        </h2>

        <p className={ProductCardClassStyles.productInfo.priceTagClass}>
          ${product.price.toFixed(2)}
        </p>

        <p className={ProductCardClassStyles.productInfo.stockAlertClass}>
          {product.inStock < 10
            ? `Only ${product.inStock} left in stock!`
            : `${product.inStock} in stock`}
        </p>

        {/* Cart controls */}
        <div
          className={
            ProductCardClassStyles.productInfo.cartControls.mainDivClass
          }
        >
          {isItemInCart ? (
            <div
              className={
                ProductCardClassStyles.productInfo.cartControls
                  .mainControlDivClass
              }
            >
              <button
                className={
                  ProductCardClassStyles.productInfo.cartControls
                    .reduceButtonClass
                }
                onClick={() => dispatch(removeOne(product))}
              >
                −
              </button>

              <span
                className={
                  ProductCardClassStyles.productInfo.cartControls
                    .quantityInCartClass
                }
              >
                {quantityInCart}
              </span>

              <button
                className={
                  ProductCardClassStyles.productInfo.cartControls
                    .increaseButtonClass
                }
                onClick={() => dispatch(addToCart(product))}
                disabled={
                  quantityInCart ? quantityInCart >= product.inStock : false
                }
              >
                +
              </button>
            </div>
          ) : (
            <button
              className={
                ProductCardClassStyles.productInfo.cartControls
                  .addToCartButtonClass
              }
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
