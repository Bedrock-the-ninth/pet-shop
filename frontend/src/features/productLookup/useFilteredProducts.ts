// @path: src/features/productLookup/useFilteredProducts.ts

// Hook import
import { useState } from "react";

// Package import
import { useSearchParams } from "react-router-dom";

// Type import
import type {
  AnimalKind,
  ProductCategory,
} from "../../core/interfaces/Products";

// Fake Data import
import { products } from "../../core/data/products";

// Type import
import type { IProducts } from "../../core/interfaces/Products";

const animalKinds = ["dog", "cat", "bird", "fish"] as const;
const categories = ["food", "accessory"] as const;

const isAnimalKind = (value: string | null): value is AnimalKind => {
  let valueCopy = value?.toLowerCase();
  return animalKinds.includes(valueCopy as AnimalKind);
};

const isInCategory = (value: string | null): value is ProductCategory => {
  let valueCopy = value?.toLowerCase();
  return categories.includes(valueCopy as ProductCategory);
};

export const filterProducts = () => {
  const [searchParams, _] = useSearchParams();

  const kind: string | null = searchParams.get("kind");
  const category: string | null = searchParams.get("category");

  const condition1 = isAnimalKind(kind);
  const condition2 = isInCategory(category);

  return [condition1 ? kind : null, condition2 ? category : null];
};

const useFilteredProducts = () => {
  const list = filterProducts();
  const [kind, _] = useState(list[0]);
  const [category, __] = useState(list[1]);

  let newProducts: IProducts[] = [];

  if (kind !== null && category !== null) {
    newProducts = products.filter(
      (product) => product.kind === kind && product.category == category,
    );
  } else if (kind !== null) {
    newProducts = products.filter((product) => product.kind === kind);
  } else if (category !== null) {
    newProducts = products.filter((product) => product.category === category);
  } else {
    newProducts = products;
  }

  return newProducts;
};

export default useFilteredProducts;
