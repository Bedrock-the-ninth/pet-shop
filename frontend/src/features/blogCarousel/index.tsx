// @path: src/app/BlogFeatures.tsx

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../core/data/blogPosts.json";

type BlogContentBlock = {
  type: string;
  text?: string;
  items?: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image: {
    src: string;
    alt: string;
  };
  content: BlogContentBlock[];
  status: "published" | "draft";
  featured?: boolean;
  featuredOrder?: number;
};

type FeaturedBlogCarouselProps = {
  posts?: BlogPost[];
  title?: string;
  subtitle?: string;
};

const BlogFeatures = ({
  posts = blogPosts as BlogPost[],
  title = "A little more care goes a long way.",
  subtitle = "FROM THE PET CARE JOURNAL",
}: FeaturedBlogCarouselProps) => {
  const featuredPosts = useMemo(() => {
    const publishedPosts = posts.filter((post) => post.status === "published");

    const selectedPosts = publishedPosts
      .filter((post) => post.featured)
      .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));

    // TODO: Until featured flags are added to the JSON, showcase the first three published articles.
    return selectedPosts.length > 0
      ? selectedPosts
      : publishedPosts.slice(0, 3);
  }, [posts]);

  const [activeIndex, setActiveIndex] = useState(0);

  if (featuredPosts.length === 0) return null;

  const activePost = featuredPosts[activeIndex % featuredPosts.length];

  const goTo = (index: number) => {
    setActiveIndex((index + featuredPosts.length) % featuredPosts.length);
  };

  const previous = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  const publishedDate = new Date(
    `${activePost.publishedAt}T12:00:00`,
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section
      aria-label="Featured blog posts"
      className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-10"
      onKeyDown={(event) => {
        if (
          event.target instanceof HTMLElement &&
          event.target.closest(
            "input, textarea, select, [contenteditable=true]",
          )
        ) {
          return;
        }

        if (event.key === "ArrowLeft") previous();
        if (event.key === "ArrowRight") next();
      }}
    >
      {/* Section heading */}
      <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {subtitle}
          </p>

          <h2 className="max-w-xl text-2xl font-bold tracking-tight text-text-h sm:text-3xl lg:text-4xl">
            {title}
          </h2>
        </div>

        <Link
          to="/blog"
          className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-text-color transition-colors hover:text-accent sm:inline-flex"
        >
          All articles
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {/* Featured slide */}
      <div
        className="overflow-hidden rounded-3xl border border-gray-100 bg-background-raised shadow-sm"
        aria-roledescription="carousel"
      >
        <div
          key={activePost.id}
          className="grid grid-cols-1 md:grid-cols-2 motion-safe:animate-[fadeIn_300ms_ease-out]"
          aria-live="polite"
          aria-atomic="true"
          aria-roledescription="slide"
          aria-label={`Article ${activeIndex + 1} of ${featuredPosts.length}`}
        >
          {/* Image */}
          <Link
            to={`/blog/${activePost.slug}`}
            className="group relative block aspect-16/10 overflow-hidden bg-accent md:aspect-auto md:min-h-105"
            aria-label={`Read ${activePost.title}`}
            tabIndex={-1}
          >
            <img
              src={activePost.image.src}
              alt={activePost.image.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent md:hidden" />
          </Link>

          {/* Article information */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-14">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
                {activePost.category}
              </span>

              <time
                dateTime={activePost.publishedAt}
                className="text-sm text-muted"
              >
                {publishedDate}
              </time>
            </div>

            <h3 className="text-2xl font-bold leading-tight tracking-tight text-text-h sm:text-3xl lg:text-4xl">
              {activePost.title}
            </h3>

            <p className="mt-5 text-base leading-7 text-text-color">
              {activePost.excerpt}
            </p>

            <div className="mt-8">
              <Link
                to={`/blog/${activePost.slug}`}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2"
              >
                Read article
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-text-color" aria-live="off">
          <span className="font-semibold text-accent">{activeIndex + 1}</span>
          {" / "}
          {featuredPosts.length}
          <span className="sr-only"> featured articles</span>
        </p>

        {/* Pagination */}
        <div
          className="flex items-center justify-center gap-2"
          role="group"
          aria-label="Choose featured article"
        >
          {featuredPosts.map((post, index) => (
            <button
              key={post.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to article ${index + 1}: ${post.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 ${
                index === activeIndex
                  ? "w-7 bg-accent"
                  : "w-2 bg-muted hover:bg-accent-soft"
              }`}
            />
          ))}
        </div>

        {/* Previous / Next */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous featured article"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-background text-text-color transition-colors hover:border-text-color hover:text-text-color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-color focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next featured article"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-background text-text-color transition-colors hover:border-text-color hover:text-text-color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-color focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Mobile link */}
      <div className="mt-6 sm:hidden">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-h hover:text-text-color"
        >
          Explore all articles
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
};

export default BlogFeatures;
