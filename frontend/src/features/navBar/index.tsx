// @path: src/features/navBar/index.tsx

// Custom Hook import
import useMediaQuery from "../../hooks/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
  const isDesktop = useMediaQuery();
  // TODO: On Mobile, add the search button and implmenet the functionality.
  return <header className="border-b border-b-border">{isDesktop ? <NavbarDesktop /> : <NavBarMobile />}</header>;
};

export default NavBar;
