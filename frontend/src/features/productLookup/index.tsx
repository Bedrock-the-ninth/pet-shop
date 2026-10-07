// @path: src/features/productLookup/index.tsx

// Component import
import { ProductCard } from "../../components/ui/ProductCard/ProductCard";

// Fake Data import
import { products } from "../../core/data/products";

const Index = () => {
  return (
    <section className="bg-background min-h-screen mt-0">
      <div className="mx-5 py-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Index;
