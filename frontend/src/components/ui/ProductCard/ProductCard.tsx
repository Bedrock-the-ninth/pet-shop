// @path: src/components/ui/ProductCard/ProductCard.tsx
import type { IProducts } from "../../../core/interfaces/Products";

export const ProductCard = ({product} : {product : IProducts}) => {
  return (
    <div id={`${product.id}`}>
        <img src={product.image} alt="Product Thumbnail" />
        {product.inStock < 10 ? <p>Only {product.inStock} left in stock!</p> : <p>{product.inStock} in stock!</p>}
        <button>Add to Cart</button>
    </div>
  )
}
