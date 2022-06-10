import { SearchBarForm, InputSearch } from "./SearchBar.styled";

export const SearchBar = () => {
  return (
    <SearchBarForm>
      <InputSearch type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </SearchBarForm>
  );
};
