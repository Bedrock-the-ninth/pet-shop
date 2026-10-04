// @path: src/features/theme/ThemeToggle.tsx
// Hook import
import { useEffect, useState } from "react";
// Interface and Type import
import type { IToggleButtonsProps } from "../../core/interfaces/ToggleButtons.props";
// Util imports
import {
  applyColorMode,
  readStoredColorMode,
  THEME_STORAGE_KEY,
  type ColorMode,
} from "./theme";
// Icon imports
import { FaSun, FaMoon } from "react-icons/fa";

type propsType = IToggleButtonsProps["className"]["themeToggleClasses"];

export function ThemeToggle({ className }: { className: propsType }) {
  const [mode, setMode] = useState<ColorMode>(readStoredColorMode);

  useEffect(() => {
    applyColorMode(mode);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      /* private mode */
    }
  }, [mode]);

  return (
    // <span onClick={clickHandler} className={className?.themeToggleSpanClass}>
    <button
      className={`${className?.themeToggleButtonClass} ${className?.themeToggleSpanClass}`}
      onClick={() => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      }}
      aria-label={`Switched to ${mode}-mode`}
    >
      {mode === "light" ? <FaMoon /> : <FaSun />}
    </button>
    // </span>
  );
}
