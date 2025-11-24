import {
  useRef,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import { Button } from "./Button";
import { SearchInput } from "./SearchInput";

export type GetLocation = {
  cityName: string | undefined;
  countryName: string;
  lat: number;
  lon: number;
};

export type GetLocationWeather = {
  cityName: string;
  current: object;
  daily: object;
};

type Props = {
  setWeatherData: Dispatch<SetStateAction<GetLocationWeather | undefined>>;
  setIsError: Dispatch<SetStateAction<boolean>>;
};

export const SearchForm = ({ setIsError, setWeatherData }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const getLocation = async (
    location: string
  ): Promise<GetLocation | undefined> => {
    try {
      const responses =
        await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json
`);
      const data = await responses.json();
      const res = data.results[0];

      return {
        cityName: res.name,
        countryName: res.country,
        lat: res.latitude,
        lon: res.longitude,
      };
    } catch (error) {
      console.log(error);
    }
  };

  const getLocationWeather = async (
    location: string
  ): Promise<GetLocationWeather | undefined> => {
    try {
      const { cityName, lat, lon } = await getLocation(location);

      const responses = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min`
      );
      const data = await responses.json();
      return {
        cityName,
        current: data.current,
        daily: data.daily,
      };
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value || "";
    try {
      const location = await getLocation(inputValue);
      const weather = await getLocationWeather(inputValue);
      setWeatherData(weather);
      setIsError(false);
    } catch {
      setIsError(true);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex gap-2.5 mt-12 max-[667px]:flex-col"
    >
      <SearchInput inputRef={inputRef} />
      <Button />
    </form>
  );
};
