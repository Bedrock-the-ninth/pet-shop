// @path: src/components/ui/CategoryButton.tsx
import { NavLink } from "react-router-dom";
import { categoryButtonClassStyles } from "../styles/categoryButtonClassStyles";
import { ICategoryButtonPropTypes } from "../../../core/interfaces/CategoryButton.props";

const CategoryButton = ({ to, label, Icon }: ICategoryButtonPropTypes) => {
  const newSearchParam = `/products?${to[0]}=${to[1].toLowerCase()}`;

  return (
    <div className={categoryButtonClassStyles.secondaryDivClass}>
      <NavLink
        to={newSearchParam}
        className={categoryButtonClassStyles.navLinkClass}
        aria-label={`${label} Products`}
      >
        <Icon className={categoryButtonClassStyles.iconClass} />
      </NavLink>
      <span className={categoryButtonClassStyles.textClass}>{label}</span>
    </div>
  );
};

export default CategoryButton;
