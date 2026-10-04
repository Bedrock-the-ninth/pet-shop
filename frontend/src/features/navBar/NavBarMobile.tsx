// @path: src/features/navBar/NavBarMobile.tsx
// Hook import
import { useState } from "react";

// Class Style import
import { navBarStylesMobile } from "./styles/navBar.styles";

// Component Import
import ToggleButtons from "./components/ToggleButtons";
import Logo from "./components/Logo";
import Modal from "../../components/ui/Modal";
import NavItems from "./components/NavItems";

// Icon import
import { RiMenu2Line } from "react-icons/ri";

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className={navBarStylesMobile.headerClassStyles}>
        <button
          className={navBarStylesMobile.hamburgerMenuButton}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <RiMenu2Line />
        </button>
        <Logo />
        <ToggleButtons className={navBarStylesMobile.toggleButtons} />
      </div>
      <Modal
        className={navBarStylesMobile.modalMenu}
        isValid={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <Logo />
        <NavItems className={navBarStylesMobile.modalMenu.navItems} />
        <hr className={navBarStylesMobile.modalMenu.hrTag} />
        <ToggleButtons className={navBarStylesMobile.toggleButtons} />
      </Modal>
    </>
  );
};

export default NavBarMobile;
