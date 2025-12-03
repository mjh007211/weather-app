import { Logo } from "./components/Logo";
import "@radix-ui/themes/styles.css";
import { UnitsDropDown } from "./components/UnitsDropDown";
import { CountryWeather } from "./components/CountryWeather";
import { WeatherDataCard } from "./components/WeatherDataCard";
import { DailyForecastCard } from "./components/DailyForecastCard";
import { HourlyForecastAside } from "./components/HourlyForecastAside";
import { SearchForm } from "./components/SearchForm";
import { useEffect, useState } from "react";

type WeatherData = {
  cityName: string;
  countryName: string;
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    is_day: number;
    wind_speed_10m: number;
  };
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
};

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    cityName: "",
    countryName: "",
    current: {
      time: "",
      temperature_2m: 0,
      relative_humidity_2m: 0,
      is_day: 0,
      wind_speed_10m: 0,
    },
    daily: {
      temperature_2m_max: [],
      temperature_2m_min: [],
    },
    hourly: {
      time: [],
      temperature_2m: [],
    },
  });
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getCurrentWeatherDataFromLocalStorage = () => {
      const getCurrentWeather = localStorage.getItem("currentWeather");
      if (!getCurrentWeather) return;
      setWeatherData(JSON.parse(getCurrentWeather));
    };
    getCurrentWeatherDataFromLocalStorage();
  }, []);

  return (
    <div
      className={`w-full ${
        isError ? "h-dvh" : "h-full"
      } bg-(--bg-color) font-dm-sans`}
    >
      <div className="lg:max-w-(--desktop-width) w-[90%] mx-auto pt-8 max-[667px]:pt-3 max-[667px]:w-[95%]">
        <header className="flex justify-between">
          <Logo />
          <UnitsDropDown />
        </header>

        <div className="flex flex-col min-[668px]:items-center min-[668px]:text-center mt-10">
          <h1 className="font-bricolage text-[50px] font-bold text-(--main-heading-color) max-[376px]:w-72 max-[376px]:mx-auto  max-[668px]:text-center">
            How's the sky looking today?
          </h1>
          <SearchForm setIsError={setIsError} setWeatherData={setWeatherData} />
        </div>
        {isError ? (
          <p className="text-2xl text-white text-center font-bold mt-10">
            No search result found!
          </p>
        ) : (
          <div className="flex max-[668px]:flex-col mt-8 gap-5 pb-16">
            <div className="flex-3 max-[376px]:mx-auto">
              <CountryWeather
                cityName={weatherData?.cityName}
                countryName={weatherData?.countryName}
                currentTemp={weatherData?.current?.temperature_2m}
                currentDate={weatherData?.current?.time}
                isDayOrNight={weatherData?.current?.is_day}
              />
              <WeatherDataCard
                currentTemp={weatherData?.current?.temperature_2m}
                currentHumidity={weatherData?.current?.relative_humidity_2m}
                currentWindSpeed={weatherData?.current?.wind_speed_10m}
              />

              <DailyForecastCard
                maxTemps={weatherData?.daily?.temperature_2m_max}
                minTemps={weatherData?.daily?.temperature_2m_min}
              />
            </div>
            <div className="flex-1">
              <HourlyForecastAside
                hourlyTemps={weatherData?.hourly?.temperature_2m}
                hourlyTime={weatherData?.hourly?.time}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
