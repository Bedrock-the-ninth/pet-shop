// @path: src/core/data/categoryButtonList.ts

// Icon imports
import { PiDog, PiCat, PiBird, PiFish } from "react-icons/pi";
import { GiDogBowl, GiBelt } from "react-icons/gi";

const buttonList = [
  { kindOrCat: "kind", title: "Dog", Icon: PiDog },
  { kindOrCat: "kind", title: "Cat", Icon: PiCat },
  { kindOrCat: "kind", title: "Bird", Icon: PiBird },
  { kindOrCat: "kind", title: "Fish", Icon: PiFish },
  { kindOrCat: "category", title: "Food", Icon: GiDogBowl },
  { kindOrCat: "category", title: "Accessory", Icon: GiBelt },
];

export default buttonList;
