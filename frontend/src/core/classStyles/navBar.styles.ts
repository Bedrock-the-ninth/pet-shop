// @path: src/core/classStyles/navBar.styles.ts
const navBarStyles = {
  headerClassStyles: "flex justify-between bg-background text-text-h",
  navClassStyles:
    "flex w-1/2 items-center justify-start gap-5 font-bold text-md",
  themeToggleButtonClassStyles: "text-accent-soft hover:text-accent",
  searchBarClassStyles: {
    spanClass:
      "flex items-center border-2 rounded-full border-accent-soft focus-within:border-accent mx-10 p-1",
    inputClass: "text-center text-muted focus:text-text-color",
    buttonClass:
      "text-accent-soft hover:text-accent hover:scale-120 transition-all",
  },
};

export default navBarStyles;
