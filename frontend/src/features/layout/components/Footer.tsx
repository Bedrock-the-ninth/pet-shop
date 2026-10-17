
// @path: src/features/layout/components/Footer.tsx

import Logo from "../../navBar/components/Logo";
import NavItems from "../../navBar/components/NavItems";

import {
  FaInstagram,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { FiAtSign, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://instagram.com/bedrock-the-ninth",
      icon: FaInstagram,
    },
    {
      label: "Telegram",
      href: "https://t.me/bedrock_business",
      icon: FaTelegram,
    },
    {
      label: "X",
      href: "https://x.com/",
      icon: FaXTwitter,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/",
      icon: FaFacebook,
    },
  ];

  const customerLinks = [
    { label: "Shopping Information", href: "/shipping" },
    { label: "Returns & Refunds", href: "/returns" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Contact Support", href: "/contact" },
  ];

  const contactLinks = [
    {
      label: "support@pawmart.com",
      href: "mailto:support@pawmart.com",
      icon: FiAtSign,
    },
    {
      label: "026 123 456 78",
      href: "tel:+982612345678",
      icon: FaPhone,
    },
    {
      label: "Alborz, Iran",
      href: "https://maps.app.goo.gl/666GPXhramH8BVYK9",
      icon: FaLocationDot,
      external: true,
    },
  ];

  const linkClass =
    "group inline-flex w-fit items-center gap-1 text-sm text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

  const headingClass =
    "mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-text-h";

  return (
    <footer className="relative border-t border-border bg-background text-text-color">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:px-8 sm:py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-10">
        {/* Brand and social links */}
        <div className="flex flex-col items-start">
          <Logo />

          <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
            Happy pets, happy lives. Everything your furry family needs,
            all in one place.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit PawMart on ${label}`}
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-background-raised text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent-soft hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Icon className="size-[17px]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick navigation */}
        <div>
          <h2 className={headingClass}>Explore PawMart</h2>

          <nav aria-label="Footer navigation">
            <NavItems
              className="flex flex-col items-start gap-3"
            />
          </nav>
        </div>

        {/* Customer service */}
        <div>
          <h2 className={headingClass}>Customer Care</h2>

          <nav aria-label="Customer service">
            <ul className="flex flex-col items-start gap-3">
              {customerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link to={href} className={linkClass}>
                    {label}
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="size-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact details */}
        <div>
          <h2 className={headingClass}>Get in Touch</h2>

          <ul className="flex flex-col gap-4">
            {contactLinks.map(
              ({ label, href, icon: Icon, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="group flex items-start gap-3 text-sm text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background-raised text-accent transition-colors group-hover:border-accent/40">
                      <Icon
                        aria-hidden="true"
                        className="size-4"
                      />
                    </span>

                    <span className="pt-2">{label}</span>
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/80 bg-background-raised/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-xs text-muted sm:px-8 md:flex-row lg:px-10">
          <p className="text-center md:text-left">
            © {currentYear} PawMart. All rights reserved.
          </p>

          <nav
            aria-label="Legal information"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            <Link to="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={linkClass}>
              Terms of Service
            </Link>
          </nav>

          <a
            href="#top"
            className={`${linkClass} group`}
          >
            Back to top
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
