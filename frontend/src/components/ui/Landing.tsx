// @path: src/components/ui/Landing.tsx
import { Link } from "react-router-dom";
import landingImg from "../../assets/images/landing-image.webp";

const Landing = () => {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/10 bg-background text-text-color lg:flex lg:min-h-136 lg:items-center xl:min-h-152">
      <div className="relative aspect-4/3 sm:aspect-video lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-3/5">
        <img
          src={landingImg}
          alt="A golden retriever and a tabby cat resting together on a plush dog bed"
          fetchPriority="high"
          className="size-full object-cover object-[74%_center]"
        />

        {/* Mobile bottom fade */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 via-30% to-transparent lg:hidden" />
        {/* Desktop left fade */}
        <div className="absolute inset-0 hidden bg-linear-to-r from-background via-background/60 via-25% to-transparent to-70% lg:block" />
      </div>

      {/* Text */}
      <div className="relative mx-auto -mt-10 w-full max-w-6xl px-6 pb-14 sm:-mt-14 sm:px-10 lg:mt-0 lg:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase sm:text-sm">
            Healthy pets, happy lives
          </p>

          <h1 className="mt-4 text-4xl leading-[1.08] text-text-h font-bold tracking-tight text-balance sm:text-5xl xl:text-6xl">
            The best care for your furry friends
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-pretty text-text-color/75 sm:text-lg sm:leading-8">
            Premium pet food, supplies and accessories for dogs, cats, birds and
            more. Because they deserve the best.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center rounded-full bg-accent-soft px-7 py-3 font-semibold text-text-color shadow-lg shadow-black/30 transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
