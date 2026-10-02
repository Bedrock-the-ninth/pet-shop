// @path: src/core/classStyles/navBar.styles.ts
const navBarStyles = {
  headerClassStyles: "flex justify-between bg-background text-text-h",
  navClassStyles:
    "flex w-1/2 items-center justify-start gap-5 font-bold text-md",
  searchBarClassStyles: {
    spanClass:
      "flex items-center border-2 rounded-full border-accent-soft bg-border focus-within:border-accent mx-10 p-1",
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

export default navBarStyles;
