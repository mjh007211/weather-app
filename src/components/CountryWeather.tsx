import { useEffect, useState } from "react";
import weatherDesktopBG from "../assets/bg-today-large.svg";
import weatherMobileBG from "../assets/bg-today-small.svg";
import sunIcon from "../assets/icon-sunny.webp";
import moonIcon from "../assets/ChatGPT Image Nov 29, 2025, 04_46_07 PM.png";

type Props = {
  cityName: string;
  countryName: string;
  currentDate: string;
  currentTemp: number;
  isDayOrNight: number;
};

export const CountryWeather = ({
  cityName,
  countryName,
  currentTemp,
  currentDate,
  isDayOrNight,
}: Props) => {
  const [todayDate, setTodayDate] = useState("");

  const getDate = (date: string) => {
    if (!date) return "";
    const editDate = date.split("T")[0];
    return editDate;
  };

  const formatDayMonthYear = (apiDate?: string) => {
    if (!apiDate) return "";

    const date = new Date(apiDate);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  useEffect(() => {
    if (currentDate) {
      const date = getDate(currentDate);
      setTodayDate(formatDayMonthYear(date));
    }
  }, [currentDate]);

  return (
    <div className="relative">
      <img
        className="min-[376px]:block hidden w-full"
        src={weatherDesktopBG}
        alt=""
      />
      <img className="max-[376px]:block hidden" src={weatherMobileBG} alt="" />
      <div className="absolute w-full  left-0 top-[50%] translate-y-[-50%] min-[376px]:pl-5 max-[376px]:top-14 max-[376px]:text-center max-[668px]:">
        <h2 className="text-(--country-city-color) w-full font-bold text-2xl">
          {cityName}, {countryName}
        </h2>
        <p className="text-(--day-month-year-color) mt-2.5">{todayDate}</p>
      </div>

      <div
        className="absolute right-0 min-[376px]:top-[50%] min-[376px]:translate-y-[-50%] min-[376px]:pr-5 max-[376px]:bottom-16 max-[376px]:left-1/2 
    max-[376px]:-translate-x-1/2"
      >
        <div className="flex lg:gap-10 max-[376px]:gap-10 items-center justify-center">
          {isDayOrNight ? (
            <img className="w-36 h-36" src={sunIcon} alt="" />
          ) : (
            <img className="w-36 h-36" src={moonIcon} alt="" />
          )}
          <span className="text-8xl text-(--current-degree-color) font-medium">
            {Math.round(currentTemp)}&#176;
          </span>
        </div>
      </div>
    </div>
  );
};
