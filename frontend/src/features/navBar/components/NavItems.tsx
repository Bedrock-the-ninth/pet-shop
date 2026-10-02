// @path: src/features/navBar/components/NavItems.tsx
import { useState } from "react";
import type { SearchBarProps } from "../../../core/interfaces/SearchBar.props";

import { NavLink } from "react-router-dom";
import SearchBar from "../../searchBar/SearchBar";

type classNameProp = SearchBarProps["className"]
const NavItems = ({className}: {className : classNameProp}) => {
  const [searchFieldValue, setSearchFieldValue] = useState<string>("");

  return (
    <>
      {/* Links */}
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/posts">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact-us">Contact</NavLink>

      {/* Search bar */}
      <SearchBar
        value={searchFieldValue}
        setValue={setSearchFieldValue}
        className={className}
      />
    </>
  );
};

export default NavItems;
