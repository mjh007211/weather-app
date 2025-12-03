type Props = {
  currentHumidity: number;
  currentWindSpeed: number;
  currentTemp: number;
};

export const WeatherDataCard = ({
  currentHumidity,
  currentWindSpeed,
  currentTemp,
}: Props) => {
  const calculateFeelsLike = (
    currentWindSpeed: number,
    currentHumidity: number,
    currentTemp: number
  ) => {
    const T = currentTemp;
    const H = currentHumidity;
    const W = currentWindSpeed;

    let feels = T;

    if (T >= 27) {
      const T_F = (T * 9) / 5 + 32;
      const HI =
        -42.379 +
        2.049 * T_F +
        10.143 * H -
        0.224 * T_F * H -
        0.0068 * T_F * T_F -
        0.054 * H * H +
        0.0012 * T_F * T_F * H +
        0.00085 * T_F * H * H -
        0.00000199 * T_F * T_F * H * H;
      feels = ((HI - 32) * 5) / 9;
    } else if (T <= 10 && W > 4.8) {
      feels =
        13.12 +
        0.6215 * T -
        11.37 * Math.pow(W, 0.16) +
        0.3965 * T * Math.pow(W, 0.16);
    }

    return Math.round(feels);
  };

  return (
    <div className="grid lg:grid-cols-[repeat(4,minmax(auto,1fr))] max-[376px]:grid-cols-[repeat(2,minmax(auto,1fr))] max-[668px]:grid-cols-[repeat(3,minmax(auto,1fr))] gap-5 mt-7">
      <div className=" bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Feels Like</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          {calculateFeelsLike(currentWindSpeed, currentHumidity, currentTemp)}
          &#176;
        </span>
      </div>
      <div className=" bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Humidity</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          {currentHumidity}%
        </span>
      </div>
      <div className=" bg-(--cards-bg-color) rounded-lg pl-3.5 py-3.5">
        <p className="text-(--cards-heading-color)">Wind</p>
        <span className="text-(--weather-info-color) inline-block mt-2.5 text-2xl">
          {Math.round(currentWindSpeed)} km/h
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
