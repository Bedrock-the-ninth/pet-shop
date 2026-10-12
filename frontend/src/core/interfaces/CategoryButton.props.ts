// @path: src/core/interfaces/CategoryButton.props.ts
import type { IconType } from "react-icons";

type parameter = "kind" | "category";
type query = "dog" | "cat" | "bird" | "fish" | "food" | "accessory";
type label = "Dog" | "Cat" | "Bird" | "Fish" | "Food" | "Accessory";

export interface ICategoryButtonPropTypes {
  to: [parameter, query];
  label: label;
  Icon: IconType;
}
