// @path: src/core/interfaces/Products.ts
export type AnimalKind = "dog" | "cat" | "bird" | "fish";
export type ProductCategory = "food" | "accessory";

export interface IProducts {
  id: number;
  name: string;
  inStock: number // How many are in the inventory
  boughtOut: number; // How many are bought out
  kind: AnimalKind; //Related to what kind of animal
  category: ProductCategory; // Food or accessory
  price: number;

  thumbnail: string;
  image: string;
}
