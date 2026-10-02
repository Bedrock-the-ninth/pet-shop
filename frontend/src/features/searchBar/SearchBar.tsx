// @path: src/features/searchBar/SearchBar.tsx
import type { SearchBarProps } from "../../core/interfaces/SearchBar.props";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ value, setValue, className }: SearchBarProps) => {
  return (
    <>
      <span className={`${className?.spanClass}`}>
        <input
          type="text"
          className={`${className?.inputClass}`}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          placeholder="Search Products"
          style={{ outline: "none" }}
        />
        <button className={`${className?.buttonClass}`}>
          <MdSearch />
        </button>
      </span>
    </>
  );
};

export default SearchBar;
