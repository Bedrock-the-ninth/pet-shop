
import { type SubmitEvent, useState } from "react";

type NewsletterSectionProps = {
  onSubscribe: (email: string) => Promise<void>;
};

const Newsletter = ({ onSubscribe }: NewsletterSectionProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      await onSubscribe(email);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-background px-4 py-16 sm:px-8 sm:py-20">
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-24 top-0 size-72 rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 size-80 rounded-full bg-accent-soft/40 blur-[110px]" />
        <div className="absolute inset-0 bg-linear-to-b from-background-raised/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Frosted glass panel */}
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background-raised/60 px-6 py-10 shadow-shadow backdrop-blur-2xl sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          {/* Glass highlights */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-text-color/30 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full border border-border/40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-16 size-48 rounded-full border border-border/40"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            {/* Copy */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-accent-soft/50 px-3 py-1.5 text-xs font-medium tracking-[0.16em] text-accent uppercase">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <circle cx="7" cy="7" r="2.5" />
                  <circle cx="12" cy="5" r="2.5" />
                  <circle cx="17" cy="7" r="2.5" />
                  <circle cx="19" cy="12" r="2.2" />
                  <path d="M12 10c-3.8 0-7.5 4.3-7.5 7.3 0 2.1 1.7 3.1 3.5 2.4l2.5-1 2.5 1c1.8.7 3.5-.3 3.5-2.4C19.5 14.3 15.8 10 12 10Z" />
                </svg>
                JOIN OUR PACK
              </div>

              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-text-h sm:text-4xl lg:text-5xl">
                Good things for{" "}
                <span className="font-serif italic text-accent">
                  good pets.
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">
                Get pet care tips, new arrivals, exclusive offers, and little
                things to make your furry friend's life even better.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Helpful pet care tips
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Special offers
                </span>
              </div>
            </div>

            {/* Subscription form */}
            <div className="rounded-2xl border border-border/60 bg-background/40 p-5 backdrop-blur-md sm:p-7">
              <h3 className="text-lg font-medium text-text-h">
                A little treat for your inbox
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                Sign up for our newsletter and stay in the loop.
              </p>

              <form onSubmit={handleSubmit} className="mt-6">
                <label
                  htmlFor="newsletter-email"
                  className="mb-2 block text-sm font-medium text-text-color"
                >
                  Email address
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setStatus("idle");
                    }}
                    disabled={status === "loading"}
                    className="min-w-0 flex-1 rounded-xl border border-border bg-background-raised/70 px-4 py-3 text-sm text-text-color outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
                  />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-background-raised transition hover:bg-accent/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-wait disabled:opacity-60"
                  >
                    {status === "loading" ? "Joining..." : "Subscribe"}

                    {status !== "loading" && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="size-4"
                      >
                        <path
                          d="M5 12h14m-6-6 6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <p
                  aria-live="polite"
                  role="status"
                  className={`mt-3 min-h-5 text-xs leading-5 ${
                    status === "error"
                      ? "text-accent"
                      : status === "success"
                        ? "text-text-h"
                        : "text-muted"
                  }`}
                >
                  {status === "success"
                    ? "Thanks for joining our pack!"
                    : status === "error"
                      ? "Something went wrong. Please try again."
                      : "No spam. Just useful tips and occasional treats."}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
