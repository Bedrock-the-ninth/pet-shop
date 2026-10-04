// @path: src/hooks/useMediaQuery.ts
import { useEffect, useState } from "react";

const useMediaQuery = (query: string = "(min-width: 1024px)"): boolean => {
  const mediaQuery = window.matchMedia(query);

  const [matches, setMatches] = useState<boolean>(mediaQuery.matches);

  useEffect(() => {
    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
