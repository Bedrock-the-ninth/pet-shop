// @path: src/pages/Products/products.tsx
import { ProductCard } from "../../components/ui/ProductCard/ProductCard";
import { products } from "../../core/data/products";

const Products = () => {
  return (
    <>
      <ProductCard product={products[18]} />
    </>
  );
};

export default Products;
