// @path: src/features/categories/index.tsx

// Component import
import CategoryButton from "./components/CategoryButton";

// Static data import
import buttonList from "../../core/data/categoryButtonList";

// Class Style import
import { mainDivClass } from "./styles/categoryButtonClassStyles";

// Icon import
import { BiCategoryAlt } from "react-icons/bi";

const Categories = () => {
  return (
    <>
      <section className="flex flex-col justify-center max-w-6xl mx-auto pt-10 px-10">
        <span className="flex items-center justify-center gap-5 text-accent text-xl font-medium lg:justify-start mb-5">
          <BiCategoryAlt />
          <p>Brows by categories:</p>
        </span>
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
      </section>
      <hr className="text-border" />
    </>
  );
};

export default Categories;
