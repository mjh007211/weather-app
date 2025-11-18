import SearchIcon from "../assets/icon-search.svg";

export const SearchInput = () => {
  return (
    <div className="relative">
      <img
        className="absolute top-[50%] translate-y-[-50%] left-5 h-4 w-4"
        src={SearchIcon}
        alt=""
      />
      <input
        className="w-[500px] h-10 px-12 rounded-lg bg-(--search-input-bg-color) outline-none text-(--search-input-text-color) max-[667px]:w-full hover:bg-(--search-input-hover-bg-color) transition duration-300"
        placeholder="Search for a place..."
        type="text"
        name="search-input"
      />
    </div>
  );
};
