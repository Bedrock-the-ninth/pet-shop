export interface IProducts {
  id: number;
  name: string;
  inStock: number // How many are in the inventory
  boughtOut: number; // How many are bought out
  kind: string; //Related to what kind of animal
  category: string; // Food or accessory
  price: number;

  thumbnail: string;
  image: string;
}
