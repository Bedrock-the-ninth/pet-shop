// @path: src/pages/home/Home.tsx
import PromoBanner from "../../components/ui/PromoBanner";
import Landing from "../../components/ui/Landing";
import Categories from "../../features/categories";
import FeaturedProducts from "../../features/featuredProducts/FeaturedProducts";
import { usePageTitle } from "../../hooks/usePageTitle";
import Benefits from "../../components/ui/Benefits";
import BlogCarousel from "../../features/blogCarousel/index";
import Newsletter from "../../features/newsletter";

const Home = () => {
  usePageTitle();

  return (
    <section className="bg-background">
      <Landing />
      <section>
        <Categories />
        <FeaturedProducts />
      </section>
      <PromoBanner />
      <Benefits />
      <hr className="text-border/90" />
      <BlogCarousel />
      <Newsletter
        onSubscribe={async (email: string) => {
          console.log("Newsletter signup: ", email);
        }}
      />
    </section>
  );
};

export default Home;
