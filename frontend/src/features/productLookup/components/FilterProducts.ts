// @path: src/features/productLookup/components/FilterProducts.ts
import { useSearchParams } from "react-router-dom";
import type {
  AnimalKind,
  ProductCategory,
} from "../../../core/interfaces/Products";

export type SearchParamTypes = {
  kind: AnimalKind;
  category: ProductCategory;
};

const FilterProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // if (searchParams)
};

export default FilterProducts;
