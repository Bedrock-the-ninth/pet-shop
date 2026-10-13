// @path: src/components/ui/Landing.tsx
import heroImg from "../../assets/images/cat-and-dog.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="relative flex flex-col overflow-hidden bg-background border-b border-b-border lg:min-h-136 lg:flex-row lg:items-center">
      <div className="relative flex flex-col items-center-safe lg:items-start z-10 mx-auto w-full max-w-6xl px-6 pt-12 pb-10 sm:px-10 sm:pt-10 lg:py-24">
        <div className="max-w-lg">
          <p className="text-sm font-medium text-accent">
            Healthy pets, happy lives
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance text-text-h sm:text-5xl xl:text-6xl">
            The best care for your furry friends
          </h1>
          <p className="mt-5 text-base leading-7 text-pretty text-text-color sm:text-lg sm:leading-8">
            Premium pet food, supplies and accessories for dogs, cats, birds and
            more. Because they deserve the best.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-flex rounded-full bg-accent px-7 py-3 font-semibold text-background shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Shop now
          </Link>
        </div>
      </div>

      <div className="relative h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-3/5">
        <img
          src={heroImg}
          alt="A dog between two cats!"
          className="size-full object-cover object-center"
        />

        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-background from-10% to-background/0 lg:inset-0 lg:h-auto lg:bg-linear-to-r lg:to-60%" />
      </div>
    </section>
  );
};

export default Landing;
