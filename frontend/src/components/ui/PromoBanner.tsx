// src/components/ui/PromoBanner/PromoBanner.tsx
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import promoPetBeds from "../../assets/images/pet-bed.webp";

const PromoBanner = () => {
  return (
    <section className="relative isolate overflow-hidden border border-border">
      <img
        src={promoPetBeds}
        alt=""
        width={2400}
        height={600}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-left"
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-background/60 md:bg-transparent md:bg-linear-to-r md:from-transparent md:via-background/40 md:to-background/90" />

      <div className="relative flex min-h-64 items-center justify-end p-8 md:p-12 lg:pr-48">
        <div className="max-w-sm">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Special offer
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-text-h">
            Up to 30% Off Selected Pet Beds
          </h2>
          <p className="mt-3 text-sm text-text-color/80">
            Comfort for them. Peace of mind for you.
          </p>
          <Link
            to={{ pathname: "/products", search: "?q=pet-beds" }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Shop Now <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
