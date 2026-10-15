// @path: src/components/ui/Benefits.tsx

// Icon import
import { MdTimer, MdSupportAgent } from "react-icons/md";
import { FaStar, FaTruck } from "react-icons/fa";
import { IconType } from "react-icons";

interface benefitUIProps {
  id?: number;
  Icon: IconType;
  title: string;
  text: string;
}

const BenifitUI = ({ Icon, title, text }: benefitUIProps) => {
  return (
    <div className="flex items-center">
      <span className="flex items-center justify-center max-w-15 size-20 mx-5 border border-accent rounded-full bg-background-raised">
        <Icon className="size-10 text-accent text-center" />
      </span>
      <span className="text-pretty">
        <h4 className="text-text-h text-lg font-medium">{title}</h4>
        <p className="text-text-color text-md font-light">{text}</p>
      </span>
    </div>
  );
};

const benefitInput: benefitUIProps[] = [
  {
    id: 1,
    Icon: FaTruck,
    title: "Free Shipping",
    text: "For orders over 150$",
  },
  {
    id: 2,
    Icon: FaStar,
    title: "Trusted Brands",
    text: "Only the best for your pets",
  },
  {
    id: 3,
    Icon: MdTimer,
    title: "Easy Returns",
    text: "Hassle-free shipping.",
  },
  {
    id: 4,
    Icon: MdSupportAgent,
    title: "24/7 Support",
    text: "We're here to help.",
  },
];

const Benefits = () => {
  return (
    <div className="flex flex-col max-w-lg md:max-w-3xl lg:max-w-6xl mx-auto p-5">
      {/* TODO: Dynamic naming or naming through locales. */}
      <h3 className="text-text-h text-xl font-bold">Why Choose PawMart?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        {benefitInput.map((item) => (
          <BenifitUI
            key={item.id}
            Icon={item.Icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
