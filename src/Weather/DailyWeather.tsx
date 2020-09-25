import React from "react";

import { DayWeatherBox } from "../Style";

function DailyWeather(props: any) {
  const ICON_URL = (icon: string): string => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };
  const ICON_WIDTH: number = 50;
  const ICON_HEIGHT: number = 50;
  const DAYS: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  const DEGREE: string = "°C";

  const MONTH: string = props.date.getMonth() + 1;
  const DATE: string = props.date.getDate();
  const DAY: string = DAYS[props.date.getDay()];
  const WEATHER: string = props.weather;
  const TEMPERATURE_K: string = props.temperature;
  const TEMPERATURE_C = (temperature_k: string): string => {
    let temK: number = +temperature_k;
    let temC = temK - 273.15;
    return temC.toFixed(1).toString();
  };
  const ICON: string = props.icon;

  return (
    <DayWeatherBox>
      <div>
        {MONTH}/{DATE}({DAY})
      </div>
      <img
        src={ICON_URL(ICON)}
        alt={""}
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
      />
      <div>({WEATHER})</div>
      <div>
        {TEMPERATURE_C(TEMPERATURE_K)}
        {DEGREE}
      </div>
    </DayWeatherBox>
  );
}

export default DailyWeather;
