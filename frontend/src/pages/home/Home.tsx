// @path: src/pages/home/Home.tsx
import Landing from "../../components/ui/Landing";
import Categories from "../../features/categories";
import FeaturedProducts from "../../features/featuredProducts/FeaturedProducts";

const Home = () => {
  return (
    <section>
      <Landing />
      <section className="bg-background">
        <Categories />
        <FeaturedProducts />
      </section>
    </section>
  );
};

export default Home;
