// @path: src/pages/Products/Products.tsx
import Index from "../../features/productLookup";
import { usePageTitle } from "../../hooks/usePageTitle";

// @path: src/pages/Products/products.tsx
const Products = () => {
  usePageTitle();
  return <Index />;
};

export default Products;
