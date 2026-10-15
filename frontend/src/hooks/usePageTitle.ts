// @path: src/hooks/usePageTitle.ts

// React Hook import
import { useEffect } from "react";

// Package import
import { useLocation } from "react-router-dom";

const PAGE_TITLES: Record<string, string> = {
  "/": "Home",
  "/products": "Products",
  "/cart": "Shopping Cart",
  "/admin": "Admin Dashboard",
};

export function usePageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageTitle = PAGE_TITLES[pathname] ?? "Page Not Found";

    // TODO: When locales are figured out, the name should become dynamic.
    document.title = `${pageTitle} | PawMart`;
  }, [pathname]);
}
