// src/components/ui/PromoBanner/PromoBanner.tsx
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import promoPetBeds from "../../assets/images/pet-bed.webp";

// LEAF ICON I HAVE NO IDEA ABOUT (AI MADE)
const LeafOutline = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 240"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    {/* stem */}
    <path d="M100 240 C100 180 105 120 130 40" />
    {/* big leaf + vein */}
    <path d="M100 200 C40 180 30 110 60 60 C100 90 115 150 100 200 Z" />
    <path d="M100 200 C85 150 75 110 60 60" />
    {/* second leaf + vein */}
    <path d="M115 150 C170 140 190 90 180 30 C130 50 105 100 115 150 Z" />
    <path d="M115 150 C145 110 165 70 180 30" />
  </svg>
);

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

      {/* Decorative leaf */}
      <LeafOutline className="pointer-events-none absolute -bottom-4 right-6 hidden h-4/5 text-accent opacity-40 lg:block" />

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
            to={{pathname: "/products", search: "?q=pet-beds"}}
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
