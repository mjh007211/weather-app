import weatherBG from "../assets/bg-today-large.svg";
import sunIcon from "../assets/icon-sunny.webp";

export const CountryWeather = () => {
  return (
    <div className="relative w-[800px] h-[286px]">
      <img src={weatherBG} alt="" />
      <div className="absolute z-10 left-5 top-[50%] translate-y-[-50%]">
        <h2 className="text-(--country-city-color) font-bold text-2xl">
          Berlin, German
        </h2>
        <p className="text-(--day-month-year-color) mt-2.5">
          Wed, Nov 19, 2025
        </p>
      </div>

      <div className="absolute z-10 top-[50%] translate-y-[-50%] right-5">
        <div className="flex gap-9">
          <img className="w-28 h-28" src={sunIcon} alt="" />
          <span className="text-8xl text-(--current-degree-color) font-medium">
            20&#176;
          </span>
        </div>
      </div>
    </div>
  );
};
