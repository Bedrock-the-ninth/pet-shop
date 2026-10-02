// @path: src/features/navBar/index.tsx

// Component Imports
import Logo from "./components/Logo";
import NavItems from "./components/NavItems";
// Style className import
import navBarStyles from "../../core/classStyles/navBar.styles";
import ToggleButtons from "./components/ToggleButtons";

const NavBar = () => {
  return (
    <header className={navBarStyles.headerClassStyles}>
      <Logo />
      <nav className={navBarStyles.navClassStyles} aria-label="Main">
        <NavItems className={navBarStyles.searchBarClassStyles} />
      </nav>
      <ToggleButtons className={navBarStyles.toggleButtons} />
    </header>
  );
};

export default NavBar;
