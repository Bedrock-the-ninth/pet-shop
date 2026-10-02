// @path: src/features/theme/ThemeToggle.tsx
import { useEffect, useState } from "react";
import {
  applyColorMode,
  readStoredColorMode,
  THEME_STORAGE_KEY,
  type ColorMode,
} from "./theme";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle({className}: {className: string}) {
  const [mode, setMode] = useState<ColorMode>(readStoredColorMode);

  useEffect(() => {
    applyColorMode(mode);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      /* private mode */
    }
  }, [mode]);

  function clickHandler() {
    setMode((prev) => (prev == "light" ? "dark" : "light"));
  }

  return (
    <>
      <button onClick={clickHandler} className={className}>
        {mode === "light" ? <FaSun /> : <FaMoon />}
      </button>
    </>
  );
}
