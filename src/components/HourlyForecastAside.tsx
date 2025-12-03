import { DaysDropDown } from "./DaysDropDown";
import weatherStatusImg from "../assets/icon-overcast.webp";

type Props = {
  hourlyTemps: number[];
  hourlyTime: string[];
};

export const HourlyForecastAside = ({ hourlyTemps, hourlyTime }: Props) => {
  const hours = hourlyTime.map((t) => t.split("T")[1].slice(0, 2));

  return (
    <aside className="px-5 py-8 bg-(--aside-bg-color) rounded-xl">
      <div className="flex justify-between">
        <h3 className="text-(--aside-heading-color)">Hourly forecast</h3>
        <DaysDropDown />
      </div>

      <ul className="flex flex-col gap-2 mt-5">
        {hourlyTemps.slice(0, 8).map((temp, index) => (
          <li
            key={index}
            className="flex justify-between items-center  bg-(--aside-list-bg-color) rounded-lg px-2.5 border border-(--aside-list-border-color)"
          >
            <div className="flex items-center gap-1.5">
              <img className="w-12 h-12" src={weatherStatusImg} alt="" />
              <span className="text-(--time-color)">
                {hours[index]}{" "}
                {Number(hours[index]) >= 0 && Number(hours[index]) <= 11
                  ? "AM"
                  : "PM"}
              </span>
            </div>
            <span className="text-(--aside-degree-color)">{temp}&#176;</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};
