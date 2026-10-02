// @path: src/core/interfaces/SearchBar.props.ts
export interface SearchBarProps {
  value: string;
  setValue: (arg: string) => void;
  className?: {
    spanClass: string;
    inputClass: string;
    buttonClass: string;
  };
}

