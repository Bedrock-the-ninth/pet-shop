// @path: src/core/classStyles/navBar.styles.ts
export const navBarStyles = {
  headerClassStyles:
    "hidden lg:flex items-center justify-between bg-background text-text-h",
  navClassStyles:
    "flex w-1/2 items-center justify-center gap-5 font-bold text-md",
  searchBarClassStyles: {
    spanClass:
      "flex items-center border-2 rounded-full border-accent-soft bg-border focus-within:border-accent h-10 mx-2 p-1",
    inputClass: "text-center text-muted focus:text-text-color",
    buttonClass:
      "text-text-color hover:text-accent scale-120 hover:scale-150 transition-all",
  },
  toggleButtons: {
    mainDivClass: "flex items-center justify-content gap-5 px-5 min-h-18",
    userAndCartButtonsClasses:
      "text-text-color hover:text-accent scale-120 hover:scale-150 transition-all",
    themeToggleClasses: {
      themeToggleSpanClass:
        "flex bg-text-color text-background-raised hover:bg-accent text-center justify-center rounded-full items-center min-w-10 hover:scale-110 transition-all",
      themeToggleButtonClass: "py-1",
    },
  },
};

export const navBarStylesMobile = {
  headerClassStyles:
    "lg:hidden flex items-center justify-between bg-background text-text-h min-h-15",
  hamburgerMenuButton: "text-text-color hover:text-accent scale-120 mx-2 px-5",
  toggleButtons: {
    mainDivClass: "flex items-center mx-2 px-2 gap-5 min-h-15",
    userAndCartButtonsClasses:
      "text-text-color hover:text-accent scale-120 hover:scale-150 transition-all",
    themeToggleClasses: {
      themeToggleSpanClass:
        "flex bg-text-color text-background-raised hover:bg-accent text-center justify-center rounded-full items-center min-w-10 hover:scale-110 transition-all",
      themeToggleButtonClass: "py-1",
    },
  },
  modalMenu: {
    mainDivClass: "flex flex-col text-text-color",
    buttonClass: "fixed cursor-pointer",
    childrenClass: "flex flex-col items-center",
    navItems: "flex flex-col justify-center items-center gap-5 mt-5",
    hrTag: "my-5 min-w-40 text-text-color text-center",

  },
};
