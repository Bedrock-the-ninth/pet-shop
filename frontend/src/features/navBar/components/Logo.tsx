// @path: src/features/navBar/components/Logo.tsx
import { Link } from "react-router-dom";
import type { ILogoProps } from "../../../core/interfaces/Logo.props";
import { MdOutlinePets } from "react-icons/md";

const Logo = ({ business_name, LogoIcon }: ILogoProps) => {
  return (
    <Link
      to="/"
      style={{ textDecoration: "none" }}
      className="flex gap-2 items-center  justify-center min-h-18 min-w-10 p-2 text-text-h font-bold text-2xl"
    >
      {LogoIcon ? (
        <LogoIcon className="text-accent min-h-15" />
      ) : (
        <MdOutlinePets className="text-accent" />
      )}
      <h1 className="text-xl">
      {business_name || "PetShop"}
      </h1>
    </Link>
  );
};

export default Logo;
