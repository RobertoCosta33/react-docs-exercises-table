import { FilterableProductTablePage } from "./FilterableProductTable.styled";
import { SearchBar } from "../SearchBar";
import { ProductTable } from "../ProductTable";
import { useState } from "react";

export const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const onFilterTextChange = ({ target: { value } }) => {
    setFilterText(value);
  };

  const onInStockOnlyChange = ({ target: { checked } }) => {
    setInStockOnly(checked);
  };

  return (
    <FilterableProductTablePage>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={onFilterTextChange}
        onInStockOnlyChange={onInStockOnlyChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </FilterableProductTablePage>
  );
};
