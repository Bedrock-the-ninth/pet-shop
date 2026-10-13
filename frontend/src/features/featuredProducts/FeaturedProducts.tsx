// @path: src/features/featuredProducts/index.jsx
import { products } from "../../core/data/products";
import ProductCard from "../../components/ui/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <div className="py-5 mx-auto max-w-lg md:max-w-3xl lg:max-w-5xl ">
      <div className="flex flex-row items-center justify-between mb-6 mx-5 overflow-hidden">
        <span className="flex flex-col justify-baseline">
          <p className="text-sm font-medium text-accent">Best Sellers</p>
          <h2 className="text-2xl font-semibold text-text-h">
            Featured Products:
          </h2>
        </span>
        <Link to="/products" className="text-md font-medium text-accent text-center">View All Products →</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto max-w-80 md:max-w-xl lg:max-w-4xl">
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
