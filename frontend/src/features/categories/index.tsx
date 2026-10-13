// @path: src/features/categories/index.tsx

// Component import
import CategoryButton from "./components/CategoryButton";

// Static data import
import buttonList from "../../core/data/categoryButtonList";

// Class Style import
import { mainDivClass } from "./styles/categoryButtonClassStyles";

const Categories = () => {
  return (
    <>
    <section className="flex  flex-col justify-center max-w-6xl mx-auto pt-10 px-10">
      <h2 className="text-accent text-xl font-medium underline flex justify-center lg:justify-start mb-5">
        Brows by categories:
      </h2>
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
    <hr className="text-border"/>
    </>
  );
};

export default Categories;
