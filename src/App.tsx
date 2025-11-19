import { Logo } from "./components/Logo";
import "@radix-ui/themes/styles.css";
import { UnitsDropDown } from "./components/UnitsDropDown";
import { SearchInput } from "./components/SearchInput";
import { Button } from "./components/Button";
import { CountryWeather } from "./components/CountryWeather";
import { WeatherDataCard } from "./components/WeatherDataCard";
import { DailyForecastCard } from "./components/DailyForecastCard";

function App() {
  return (
    <div className="h-full w-full bg-(--bg-color) font-dm-sans">
      <div className="lg:max-w-(--desktop-width) w-[90%] mx-auto pt-8 max-[667px]:pt-3 max-[667px]:w-[95%]">
        <header className="flex justify-between">
          <Logo />
          <UnitsDropDown />
        </header>

        <div className="flex flex-col min-[668px]:items-center min-[668px]:text-center mt-10">
          <h1 className="font-bricolage text-[50px] font-bold text-(--main-heading-color) max-[376px]:w-72 max-[376px]:mx-auto  max-[667px]:text-center">
            How's the sky looking today?
          </h1>
          <div className="flex gap-2.5 mt-12 max-[667px]:flex-col">
            <SearchInput />
            <Button />
          </div>
        </div>

        <div className="flex mt-8 gap-5">
          <div className="">
            <CountryWeather />
            <WeatherDataCard />
            <DailyForecastCard />
          </div>
          <div className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            pariatur iusto, amet debitis blanditiis obcaecati possimus officia
            voluptates quisquam? Voluptas odit repellendus labore odio corrupti
            atque officia rem quasi enim!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
