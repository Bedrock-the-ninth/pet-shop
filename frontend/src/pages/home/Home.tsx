// @path: src/pages/home/Home.tsx
import PromoBanner from "../../components/ui/PromoBanner";
import Landing from "../../components/ui/Landing";
import Categories from "../../features/categories";
import FeaturedProducts from "../../features/featuredProducts/FeaturedProducts";
import { usePageTitle } from "../../hooks/usePageTitle";

const Home = () => {
  usePageTitle();

  return (
    <section>
      <Landing />
      <section className="bg-background">
        <Categories />
        <FeaturedProducts />
        <PromoBanner />
      </section>
    </section>
  );
};

export default Home;
