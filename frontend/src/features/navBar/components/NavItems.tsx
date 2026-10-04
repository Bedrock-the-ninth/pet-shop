// @path: src/features/navBar/components/NavItems.tsx
// Package import
import { NavLink } from "react-router-dom";

const NavItems = (props : any) => {
  return (
    <nav className={props.className} aria-label="Navigation bar">
      {/* Links */}
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/posts">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact-us">Contact</NavLink>


    </nav>
  );
};

export default NavItems;
