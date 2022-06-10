import { FilterableProductTablePage } from "./FilterableProductTable.styled";
import { SearchBar } from "../SearchBar";
import { ProductTable } from "../ProductTable";

export const FilterableProductTable = ({ products }) => {
  return (
    <FilterableProductTablePage>
      <SearchBar />
      <ProductTable products={products} />
    </FilterableProductTablePage>
  );
};
