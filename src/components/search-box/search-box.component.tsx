import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    type="search"
    className={className}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;