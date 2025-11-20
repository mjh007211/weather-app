import { DaysDropDown } from "./DaysDropDown";
import weatherStatusImg from "../assets/icon-overcast.webp";

export const HourlyForecastAside = () => {
  return (
    <aside className="px-5 py-8 bg-(--aside-bg-color) rounded-xl">
      <div className="flex justify-between">
        <h3 className="text-(--aside-heading-color)">Hourly forecast</h3>
        <DaysDropDown />
      </div>

      <ul className="flex flex-col gap-2 mt-5">
        <li className="flex justify-between items-center  bg-(--aside-list-bg-color) rounded-lg px-2.5 border border-(--aside-list-border-color)">
          <div className="flex items-center gap-1.5">
            <img className="w-12 h-12" src={weatherStatusImg} alt="" />
            <span className="text-(--time-color)">3 PM</span>
          </div>
          <span className="text-(--aside-degree-color)">20&#176;</span>
        </li>
        <li className="flex justify-between items-center  bg-(--aside-list-bg-color) rounded-lg px-2.5 border border-(--aside-list-border-color)">
          <div className="flex items-center gap-1.5">
            <img className="w-12 h-12" src={weatherStatusImg} alt="" />
            <span className="text-(--time-color)">3 PM</span>
          </div>
          <span className="text-(--aside-degree-color)">20&#176;</span>
        </li>
        <li className="flex justify-between items-center  bg-(--aside-list-bg-color) rounded-lg px-2.5 border border-(--aside-list-border-color)">
          <div className="flex items-center gap-1.5">
            <img className="w-12 h-12" src={weatherStatusImg} alt="" />
            <span className="text-(--time-color)">3 PM</span>
          </div>
          <span className="text-(--aside-degree-color)">20&#176;</span>
        </li>
        <li className="flex justify-between items-center  bg-(--aside-list-bg-color) rounded-lg px-2.5 border border-(--aside-list-border-color)">
          <div className="flex items-center gap-1.5">
            <img className="w-12 h-12" src={weatherStatusImg} alt="" />
            <span className="text-(--time-color)">3 PM</span>
          </div>
          <span className="text-(--aside-degree-color)">20&#176;</span>
        </li>
        <li className="flex justify-between items-center  bg-(--aside-list-bg-color) rounded-lg px-2.5 border border-(--aside-list-border-color)">
          <div className="flex items-center gap-1.5">
            <img className="w-12 h-12" src={weatherStatusImg} alt="" />
            <span className="text-(--time-color)">3 PM</span>
          </div>
          <span className="text-(--aside-degree-color)">20&#176;</span>
        </li>
        <li className="flex justify-between items-center  bg-(--aside-list-bg-color) rounded-lg px-2.5 border border-(--aside-list-border-color)">
          <div className="flex items-center gap-1.5">
            <img className="w-12 h-12" src={weatherStatusImg} alt="" />
            <span className="text-(--time-color)">3 PM</span>
          </div>
          <span className="text-(--aside-degree-color)">20&#176;</span>
        </li>
        <li className="flex justify-between items-center  bg-(--aside-list-bg-color) rounded-lg px-2.5 border border-(--aside-list-border-color)">
          <div className="flex items-center gap-1.5">
            <img className="w-12 h-12" src={weatherStatusImg} alt="" />
            <span className="text-(--time-color)">3 PM</span>
          </div>
          <span className="text-(--aside-degree-color)">20&#176;</span>
        </li>
        <li className="flex justify-between items-center  bg-(--aside-list-bg-color) rounded-lg px-2.5 border border-(--aside-list-border-color)">
          <div className="flex items-center gap-1.5">
            <img className="w-12 h-12" src={weatherStatusImg} alt="" />
            <span className="text-(--time-color)">3 PM</span>
          </div>
          <span className="text-(--aside-degree-color)">20&#176;</span>
        </li>
      </ul>
    </aside>
  );
};
