// @path: src/features/searchBar/SearchBar.tsx
import type { ISearchBarProps } from "../../core/interfaces/SearchBar.props";
import { MdSearch } from "react-icons/md";

const SearchBar = ({
  value,
  setValue,
  onSubmit,
  className,
}: ISearchBarProps) => {
  return (
    <span onSubmit={onSubmit} className={`${className?.spanClass}`}>
      <input
        type="text"
        id="query-field"
        name="query"
        className={`${className?.inputClass}`}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        placeholder="Search Products"
        style={{ outline: "none" }}
      />
      <button type="submit" className={`${className?.buttonClass}`}>
        <MdSearch />
      </button>
    </span>
  );
};

export default SearchBar;
