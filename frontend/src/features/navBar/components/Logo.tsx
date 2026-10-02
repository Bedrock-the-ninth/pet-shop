// @path: src/features/navBar/components/Logo.tsx
import type { ILogoProps } from "../../../core/interfaces/Logo.props";
import { MdOutlinePets } from "react-icons/md";

const Logo = ({ business_name, LogoIcon }: ILogoProps) => {
  return (
    <span className="flex gap-2 items-center min-h-10 min-w-10 p-2 text-text-h font-bold text-2xl">
      {LogoIcon ? (
        <LogoIcon className="text-accent" />
      ) : (
        <MdOutlinePets className="text-accent" />
      )}
      {business_name || "PetShop"}
    </span>
  );
};

export default Logo;
