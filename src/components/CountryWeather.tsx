import weatherDesktopBG from "../assets/bg-today-large.svg";
import weatherMobileBG from "../assets/bg-today-small.svg";
import sunIcon from "../assets/icon-sunny.webp";

export const CountryWeather = () => {
  return (
    <div className="relative ">
      <img className="min-[376px]:block hidden" src={weatherDesktopBG} alt="" />
      <img className="max-[376px]:block hidden" src={weatherMobileBG} alt="" />
      <div className="absolute w-full  left-0 top-[50%] translate-y-[-50%] min-[376px]:pl-5 max-[376px]:top-14 max-[376px]:text-center max-[668px]:">
        <h2 className="text-(--country-city-color) w-full font-bold text-2xl">
          Berlin, Germany
        </h2>
        <p className="text-(--day-month-year-color) mt-2.5">
          Wed, Nov 19, 2025
        </p>
      </div>

      <div
        className="absolute right-0 min-[376px]:top-[50%] min-[376px]:translate-y-[-50%] min-[376px]:pr-5 max-[376px]:bottom-16 max-[376px]:left-1/2 
    max-[376px]:-translate-x-1/2"
      >
        <div className="flex lg:gap-10 max-[376px]:gap-10  justify-center">
          <img className="w-28 h-28" src={sunIcon} alt="" />
          <span className="text-8xl text-(--current-degree-color) font-medium">
            20&#176;
          </span>
        </div>
      </div>
    </div>
  );
};
