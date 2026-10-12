// @path: src/features/categories/index.tsx

// Component import
import CategoryButton from "./components/CategoryButton";

// Static data import
import buttonList from "../../core/data/categoryButtonList";

// Class Style import
import { mainDivClass } from "./styles/categoryButtonClassStyles";

const Categories = () => {
  return (
    <div className={mainDivClass}>
      {buttonList.map((button) => (
        <CategoryButton
          key={button.label}
          to={button.to}
          label={button.label}
          Icon={button.Icon}
        />
      ))}
    </div>
  );
};

export default Categories;
