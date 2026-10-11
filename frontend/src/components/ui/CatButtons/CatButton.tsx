// @path: src/components/ui/CategoryButtons/Buttons/Button.tsx
import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";
import { categoryButtonClassStyles } from "../../../features/categories/styles/categoryButtonClassStyles";

interface ICatButtonsPropTypes {
  kindOrCat: string;
  title: string;
  Icon: IconType;
}

const CatButton = ({ kindOrCat, title, Icon }: ICatButtonsPropTypes) => {
  return (
    <div className={categoryButtonClassStyles.secondaryDivClass}>
      <NavLink
        to={`/products?${kindOrCat}=${title.toLowerCase()}`}
        className={categoryButtonClassStyles.navLinkClass}
      >
        <Icon className={categoryButtonClassStyles.iconClass} />
      </NavLink>
      <h3 className={categoryButtonClassStyles.textClass}>{title}</h3>
    </div>
  );
};

export default CatButton;
