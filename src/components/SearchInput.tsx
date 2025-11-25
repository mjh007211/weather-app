import { useState, type ChangeEvent } from "react";
import SearchIcon from "../assets/icon-search.svg";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [citiesList, setCitiesList] = useState([]);

  const handleCitiesList = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim().length === 0) {
      setCitiesList([]);
      return;
    }

    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${value}`
    );
    const data = await response.json();

    if (!data.results) {
      setCitiesList([]);
      return;
    }

    setCitiesList(data.results);
  };

  const handleOnClick = (city) => {
    setInputValue(`${city.name}, ${city.country}`);
    setCitiesList([]);
  };

  return (
    <div className="relative">
      <img
        className="absolute top-[50%] translate-y-[-50%] left-5 h-4 w-4"
        src={SearchIcon}
        alt=""
      />

      <input
        className="w-[500px] h-10 pl-12 rounded-lg bg-(--search-input-bg-color) focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 border-black text-(--search-input-text-color) max-[667px]:w-full hover:bg-(--search-input-hover-bg-color) transition duration-300"
        placeholder="Search for a place..."
        type="text"
        name="search-input"
        value={inputValue}
        onChange={handleCitiesList}
      />

      {citiesList.length > 0 && (
        <div className="absolute w-[500px] max-h-52 overflow-y-auto left-0 top-13 px-2.5 py-2.5 rounded-lg bg-(--search-input-bg-color) text-white z-10">
          <ul className="flex flex-col gap-2.5 text-left">
            {citiesList.map((city) => (
              <li
                key={city.id}
                onClick={() => handleOnClick(city)}
                className="hover:bg-(--days-dropdown-menu-bg-color) pl-2.5 py-2 rounded-lg cursor-pointer"
              >
                {city.name}, {city.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
