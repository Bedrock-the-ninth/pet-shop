// @path: src/pages/home/Home.tsx
import Landing from "../../components/ui/Landing";
import Categories from "../../features/categories";

const Home = () => {
  return (
    <section>
      <Landing />
      <section className="bg-background">
        <Categories />
      </section>
    </section>
  );
};

export default Home;
