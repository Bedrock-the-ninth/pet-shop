// @path: src/features/featuredProducts/index.jsx
import { products } from "../../core/data/products";
import ProductCard from "../../components/ui/ProductCard/ProductCard";

const FeaturedProducts = () => {
  return (
    <div className="py-5">
      <h3 className="text-2xl text-text-h m-3 text-center lg:text-start">
        Featured Products:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
        {products.map(
          (product) =>
            product.review && (
              <ProductCard key={product.id} product={product} />
            ),
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
