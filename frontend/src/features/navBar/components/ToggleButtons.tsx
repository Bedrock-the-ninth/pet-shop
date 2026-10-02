// @path: src/features/navBar/components/ToggleButtons.tsx

// Hook import
import { useState } from "react";
// Interface and type import
import { IToggleButtonsProps } from "../../../core/interfaces/ToggleButtons.props";
// Component import
import { ThemeToggle } from "../../theme/ThemeToggle";
// Icon Import
import { FaUser, FaUserTimes } from "react-icons/fa";
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";

const ToggleButtons = ({
  className,
}: {
  className: IToggleButtonsProps["className"];
}) => {
  const [viewCart, setViewCart] = useState(false);
  const [viewDashboard, setViewDashboard] = useState(false);
  return (
    <div className={className?.mainDivClass}>
      <ThemeToggle className={className?.themeToggleClasses} />
      <button
        onClick={() => setViewCart((prev) => !prev)}
        className={className?.userAndCartButtonsClasses}
      >
        {viewCart ? <FaUserTimes /> : <FaUser />}
      </button>
      <button
        onClick={() => setViewDashboard((prev) => !prev)}
        className={className?.userAndCartButtonsClasses}
      >
        {viewDashboard ? <MdRemoveShoppingCart /> : <MdShoppingCart />}
      </button>
    </div>
  );
};

export default ToggleButtons;
