// @path: src/components/ui/ProductCard/ProductCard.tsx
// React Hook import
import { useId } from "react";

// React Redux Toolkit import
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  isInCart,
  noInCart,
  removeAll,
  removeOne,
} from "../Cart/cartSlicer";

// Component import
import Rating from "../Rating";

// Type import
import type { AppDispatch, RootState } from "../../../app/store";
import type { IProducts } from "../../../core/interfaces/Products";

// Icon import
import { FaTrashCan } from "react-icons/fa6";

// Class Style import
import ProductCardClassStyles from "./productCard.styles";

const ProductCard = ({ product }: { product: IProducts }) => {
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

        <div className="flex flex-col">
          <p className={ProductCardClassStyles.productInfo.priceTagClass}>
            ${product.price.toFixed(2)}
          </p>

          <p className={ProductCardClassStyles.productInfo.stockAlertClass}>
            {product.inStock < 10
              ? `Only ${product.inStock} left in stock!`
              : `${product.inStock} in stock`}
          </p>
        </div>

        {product.review && (
          <div className="flex flex-col items-center">
            <p className="text-muted text-center">Reviewed by {product.review.votes} people</p>
            <Rating score={product.review.score} />
          </div>
        )}
        {/* Cart controls */}
        <div className={ProductCardClassStyles.cartControls.mainDivClass}>
          {isItemInCart ? (
            <div
              className={
                ProductCardClassStyles.cartControls.mainControlDivClass
              }
            >
              <button
                className={
                  ProductCardClassStyles.cartControls.reduceButtonClass
                }
                onClick={() => dispatch(removeOne(product))}
              >
                −
              </button>

              <span
                className={
                  ProductCardClassStyles.cartControls.quantityInCartClass
                }
              >
                {quantityInCart}
              </span>

              <button
                className={
                  ProductCardClassStyles.cartControls.increaseButtonClass
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
                ProductCardClassStyles.cartControls.addToCartButtonClass
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

export default ProductCard;
