import { Logo } from "./components/Logo";
import "@radix-ui/themes/styles.css";
import { UnitsDropDown } from "./components/UnitsDropDown";
import { CountryWeather } from "./components/CountryWeather";
import { WeatherDataCard } from "./components/WeatherDataCard";
import { DailyForecastCard } from "./components/DailyForecastCard";
import { HourlyForecastAside } from "./components/HourlyForecastAside";
import { SearchForm, type GetLocationWeather } from "./components/SearchForm";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState<GetLocationWeather>({
    cityName: "",
    current: {},
    daily: {},
  });
  const [isError, setIsError] = useState(false);
  return (
    <div className="w-full h-dvh bg-(--bg-color) font-dm-sans">
      <div className="lg:max-w-(--desktop-width) w-[90%] mx-auto pt-8 max-[667px]:pt-3 max-[667px]:w-[95%]">
        <header className="flex justify-between">
          <Logo />
          <UnitsDropDown />
        </header>

        <div className="flex flex-col min-[668px]:items-center min-[668px]:text-center mt-10">
          <h1 className="font-bricolage text-[50px] font-bold text-(--main-heading-color) max-[376px]:w-72 max-[376px]:mx-auto  max-[668px]:text-center">
            How's the sky looking today?
          </h1>
          <SearchForm setWeatherData={setWeatherData} setIsError={setIsError} />
        </div>
        {isError ? (
          <p className="text-center text-white font-bold mt-12 text-2xl">
            No Search result found!
          </p>
        ) : (
          <div className="flex max-[668px]:flex-col mt-8 gap-5 pb-16">
            <div className="flex-3 max-[376px]:mx-auto">
              <CountryWeather />
              <WeatherDataCard />
              <DailyForecastCard />
            </div>
            <div className="flex-1">
              <HourlyForecastAside />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
