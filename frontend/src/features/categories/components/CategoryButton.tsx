// @path: src/components/ui/CategoryButton.tsx
import { Link } from "react-router-dom";
import { categoryButtonClassStyles } from "../styles/categoryButtonClassStyles";
import { ICategoryButtonPropTypes } from "../../../core/interfaces/CategoryButton.props";

const CategoryButton = ({ to, label, Icon }: ICategoryButtonPropTypes) => {
  return (
    <div className={categoryButtonClassStyles.secondaryDivClass}>
      <Link
        to={{pathname:"/products", search:`?${to[0]}=${to[1].toLowerCase()}`}}
        className={categoryButtonClassStyles.navLinkClass}
        aria-label={`${label} Products`}
      >
        <Icon className={categoryButtonClassStyles.iconClass} />
      </Link>
      <span className={categoryButtonClassStyles.textClass}>{label}</span>
    </div>
  );
};

export default CategoryButton;
