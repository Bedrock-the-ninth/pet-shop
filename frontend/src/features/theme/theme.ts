export type ColorMode = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'pet-shop-theme'

export function applyColorMode(mode: ColorMode) {
  const root = document.documentElement

  switch (mode) {
    case "dark":
      root.classList.add("dark")
      return;
    case "light":
      root.classList.remove("dark")
      return;
  }
}

export function readStoredColorMode(): ColorMode {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
  } catch {
    /* private mode */
  }
  return 'light'
}
