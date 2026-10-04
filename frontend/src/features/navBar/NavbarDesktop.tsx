// @path: src/features/navBar/NavbarDesktop.tsx
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import Logo from "./components/Logo";
import NavItems from "./components/NavItems";
import { navBarStyles } from "./styles/navBar.styles";
import ToggleButtons from "./components/ToggleButtons";

const NavbarDesktop = () => {
  const [searchFieldValue, setSearchFieldValue] = useState<string>("");

  return (
    <>
      {/* Desktop Navbar */}
      <div className={navBarStyles.headerClassStyles}>
        <Logo />
        <NavItems className={navBarStyles.navClassStyles} />
        {/* TODO 1: Implement the onSubmit function so we can send a request for
         querying products. */}
        <SearchBar
          value={searchFieldValue}
          setValue={setSearchFieldValue}
          // onSubmit={}
          className={navBarStyles.searchBarClassStyles}
        />
        <ToggleButtons className={navBarStyles.toggleButtons} />
      </div>
    </>
  );
};

export default NavbarDesktop;
