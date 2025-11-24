import { type Ref } from "react";
import SearchIcon from "../assets/icon-search.svg";

type Props = {
  inputRef: Ref<HTMLInputElement>;
};

export const SearchInput = ({ inputRef }: Props) => {
  return (
    <div className="relative">
      <img
        className="absolute top-[50%] translate-y-[-50%] left-5 h-4 w-4"
        src={SearchIcon}
        alt=""
      />
      <input
        className="w-[500px] h-10 px-12 rounded-lg bg-(--search-input-bg-color) focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 border-black text-(--search-input-text-color) max-[667px]:w-full hover:bg-(--search-input-hover-bg-color) transition duration-300"
        placeholder="Search for a place..."
        type="text"
        ref={inputRef}
        name="search-input"
      />
    </div>
  );
};
