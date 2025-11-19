export const WeatherDataCard = () => {
  return (
    <div className="flex gap-3.5 mt-7 max-w-[800px]">
      <div className=" flex-1 bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Feels Like</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          18&#176;
        </span>
      </div>
      <div className="flex-1 bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Humidity</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          46%
        </span>
      </div>
      <div className="flex-1 bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Wind</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          14 km/h
        </span>
      </div>
      <div className="flex-1 bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Precipitation</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          0 mm
        </span>
      </div>
    </div>
  );
};
