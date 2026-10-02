// @path: src/features/navBar/index.tsx

// Component Imports
import { ThemeToggle } from "../theme/ThemeToggle";
import Logo from "./components/Logo";
import NavItems from "./components/NavItems";
import navBarStyles from "../../core/classStyles/navBar.styles";
const NavBar = () => {
  return (
    <header className={navBarStyles.headerClassStyles}>
      <Logo />
      <nav className={navBarStyles.navClassStyles} aria-label="Main">
        <NavItems className={navBarStyles.searchBarClassStyles} />
      </nav>
      <ThemeToggle className={navBarStyles.themeToggleButtonClassStyles} />
    </header>
  );
};

export default NavBar;
