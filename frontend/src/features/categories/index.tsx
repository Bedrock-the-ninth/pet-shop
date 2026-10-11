// @path: src/components/ui/CategoryButtons.tsx

// Component import
import Buttons from "../../components/ui/CatButtons/CatButton";

// Static data import
import buttonList from "../../core/data/categoryButtonList";

// Class Style import
import { mainDivClass } from "./styles/categoryButtonClassStyles";

const Categories = () => {
  return (
    <div className={mainDivClass}>
      {buttonList.map((button) => (
        <Buttons
          key={button.title}
          kindOrCat={button.kindOrCat}
          title={button.title}
          Icon={button.Icon}
        />
      ))}
    </div>
  );
};

export default Categories;
