export const WeatherDataCard = () => {
  return (
    <div className="grid lg:grid-cols-[repeat(4,minmax(auto,1fr))] max-[376px]:grid-cols-[repeat(2,minmax(auto,1fr))] max-[668px]:grid-cols-[repeat(3,minmax(auto,1fr))] gap-5 mt-7">
      <div className=" bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Feels Like</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          18&#176;
        </span>
      </div>
      <div className=" bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Humidity</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          46%
        </span>
      </div>
      <div className=" bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Wind</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          14 km/h
        </span>
      </div>
      <div className="bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Precipitation</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          0 mm
        </span>
      </div>
    </div>
  );
};
