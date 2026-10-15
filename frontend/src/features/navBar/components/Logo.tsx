// @path: src/features/navBar/components/Logo.tsx
import { Link } from "react-router-dom";
import type { ILogoProps } from "../../../core/interfaces/Logo.props";
import { MdOutlinePets } from "react-icons/md";

const Logo = ({ businessName, LogoIcon }: ILogoProps) => {
  return (
    <Link
      to="/"
      style={{ textDecoration: "none" }}
      className="flex gap-2 items-center  justify-center min-h-18 min-w-10 p-2 text-text-h font-bold text-2xl"
    >
      {LogoIcon ? (
        <LogoIcon className="text-accent size-10" />
      ) : (
        <MdOutlinePets className="text-accent size-8" />
      )}
      <h1 className="text-2xl">{businessName || "PetShop"}</h1>
    </Link>
  );
};

export default Logo;
