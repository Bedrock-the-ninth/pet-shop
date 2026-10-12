// @path: src/core/data/categoryButtonList.ts

// Icon imports
import { PiDog, PiCat, PiBird, PiFish } from "react-icons/pi";
import { GiDogBowl, GiBelt } from "react-icons/gi";
import { ICategoryButtonPropTypes } from "../interfaces/CategoryButton.props";

const buttonList: ICategoryButtonPropTypes[] = [
  {
    to: ["kind", "dog"],
    label: "Dog",
    Icon: PiDog,
  },
  {
    to: ["kind", "cat"],
    label: "Cat",
    Icon: PiCat,
  },
  {
    to: ["kind", "bird"],
    label: "Bird",
    Icon: PiBird,
  },
  {
    to: ["kind", "fish"],
    label: "Fish",
    Icon: PiFish,
  },
  {
    to: ["category", "food"],
    label: "Food",
    Icon: GiDogBowl,
  },
  {
    to: ["category", "accessory"],
    label: "Accessory",
    Icon: GiBelt,
  },
];

export default buttonList;
