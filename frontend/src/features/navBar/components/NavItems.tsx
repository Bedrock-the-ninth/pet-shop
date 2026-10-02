// @path: src/features/navBar/components/NavItems.tsx
// Hook import
import { useState } from "react";
// Interface and type import
import type { ISearchBarProps } from "../../../core/interfaces/SearchBar.props";
// Package import
import { NavLink } from "react-router-dom";
// Component import
import SearchBar from "../../searchBar/SearchBar";

type classNameProp = ISearchBarProps["className"]
const NavItems = ({className}: {className : classNameProp}) => {
  const [searchFieldValue, setSearchFieldValue] = useState<string>("");
  // TODO 1: Implement the onSubmit function so we can send a request for querying products.
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
        // onSubmit={}
        className={className}
      />
    </>
  );
};

export default NavItems;
