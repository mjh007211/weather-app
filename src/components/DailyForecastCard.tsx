import weatherImg from "../assets/icon-rain.webp";

export const DailyForecastCard = () => {
  return (
    <div className="mt-10">
      <h3 className="text-(--daily-forecast-color) font-medium">
        Daily forecast
      </h3>
      <div className="flex gap-2.5  mt-5">
        <div className="flex-1 bg-(--cards-bg-color) rounded-lg py-4 px-2.5">
          <div className="flex flex-col items-center">
            <span className="text-(--day-color)">Tue</span>
            <img className="w-12 h-12" src={weatherImg} alt="" />
          </div>
          <div className="flex justify-between">
            <span className="text-(--highest-degree-color)">20&#176;</span>
            <span className="text-(--lowest-degree-color)">14&#176;</span>
          </div>
        </div>
        <div className="flex-1 bg-(--cards-bg-color) rounded-lg py-4 px-2.5">
          <div className="flex flex-col items-center">
            <span className="text-(--day-color)">Tue</span>
            <img className="w-12 h-12" src={weatherImg} alt="" />
          </div>
          <div className="flex justify-between">
            <span className="text-(--highest-degree-color)">20&#176;</span>
            <span className="text-(--lowest-degree-color)">14&#176;</span>
          </div>
        </div>
        <div className="flex-1 bg-(--cards-bg-color) rounded-lg py-4 px-2.5">
          <div className="flex flex-col items-center">
            <span className="text-(--day-color)">Tue</span>
            <img className="w-12 h-12" src={weatherImg} alt="" />
          </div>
          <div className="flex justify-between">
            <span className="text-(--highest-degree-color)">20&#176;</span>
            <span className="text-(--lowest-degree-color)">14&#176;</span>
          </div>
        </div>
        <div className="flex-1 bg-(--cards-bg-color) rounded-lg py-4 px-2.5">
          <div className="flex flex-col items-center">
            <span className="text-(--day-color)">Tue</span>
            <img className="w-12 h-12" src={weatherImg} alt="" />
          </div>
          <div className="flex justify-between">
            <span className="text-(--highest-degree-color)">20&#176;</span>
            <span className="text-(--lowest-degree-color)">14&#176;</span>
          </div>
        </div>
        <div className="flex-1 bg-(--cards-bg-color) rounded-lg py-4 px-2.5">
          <div className="flex flex-col items-center">
            <span className="text-(--day-color)">Tue</span>
            <img className="w-12 h-12" src={weatherImg} alt="" />
          </div>
          <div className="flex justify-between">
            <span className="text-(--highest-degree-color)">20&#176;</span>
            <span className="text-(--lowest-degree-color)">14&#176;</span>
          </div>
        </div>
        <div className="flex-1 bg-(--cards-bg-color) rounded-lg py-4 px-2.5">
          <div className="flex flex-col items-center">
            <span className="text-(--day-color)">Tue</span>
            <img className="w-12 h-12" src={weatherImg} alt="" />
          </div>
          <div className="flex justify-between">
            <span className="text-(--highest-degree-color)">20&#176;</span>
            <span className="text-(--lowest-degree-color)">14&#176;</span>
          </div>
        </div>
        <div className="flex-1 bg-(--cards-bg-color) rounded-lg py-4 px-2.5">
          <div className="flex flex-col items-center">
            <span className="text-(--day-color)">Tue</span>
            <img className="w-12 h-12" src={weatherImg} alt="" />
          </div>
          <div className="flex justify-between">
            <span className="text-(--highest-degree-color)">20&#176;</span>
            <span className="text-(--lowest-degree-color)">14&#176;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
