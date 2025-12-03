import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import SearchIcon from "../assets/icon-search.svg";
import type { WeatherData } from "../App";

type LocationData = {
  cityName: string;
  countryName: string;
  lat: number;
  lon: number;
};

type Props = {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setWeatherData: Dispatch<SetStateAction<WeatherData>>;
};

export const SearchForm = ({ setIsError, setWeatherData }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [citiesList, setCitiesList] = useState([]);
  const [locationData, setLocationData] = useState<LocationData>({
    cityName: "",
    countryName: "",
    lat: 0,
    lon: 0,
  });
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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
    const res = data.results[0];

    const locationData = {
      cityName: res.name,
      countryName: res.country,
      lat: res.latitude,
      lon: res.longitude,
    };
    setLocationData(locationData);
  };

  const handleOnClick = (city) => {
    setInputValue(`${city.name}, ${city.country}`);
    setCitiesList([]);
    console.log(city.name);
  };

  const fetchLocationWeather = async () => {
    const { cityName, countryName, lat, lon } = locationData;
    if (cityName === "" || countryName === "" || lat === 0 || lon === 0) {
      setIsError(true);
      return;
    }
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&timezone=auto`
    );

    const data = await response.json();
    setIsError(false);
    const WeatherData: WeatherData = {
      cityName,
      countryName,
      current: data.current,
      daily: data.daily,
      hourly: data.hourly,
    };

    localStorage.setItem("currentWeather", JSON.stringify(WeatherData));
    setWeatherData(WeatherData);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchLocationWeather();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex gap-2.5 mt-12 max-[667px]:flex-col"
    >
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
          onFocus={() => setIsDropdownVisible(true)}
          onBlur={() => {
            setTimeout(() => setIsDropdownVisible(false), 150);
          }}
        />

        {citiesList.length > 0 && isDropdownVisible && (
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
      <button className="w-24 h-10 rounded-lg bg-(--button-bg-color) text-(--button-text-color) transition duration-300 hover:bg-(--button-hover-bg-color) cursor-pointer max-[667px]:w-full focus:outline focus:outline-2 focus:outline-(--button-bg-color)  focus:outline-offset-4">
        Search
      </button>
    </form>
  );
};
