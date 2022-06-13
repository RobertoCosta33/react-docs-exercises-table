import { SearchBarForm, InputSearch } from "./SearchBar.styled";

export const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <SearchBarForm>
      <InputSearch
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={onFilterTextChange}
      />
      <label>
        <input
          type="checkbox"
          onChange={onInStockOnlyChange}
        />{" "}
        Only show products in stock
      </label>
    </SearchBarForm>
  );
};
