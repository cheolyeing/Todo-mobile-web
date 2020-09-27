import React, { useEffect, useState } from "react";
import { WeatherBox, Header3 } from "../Style";
import dotenv from "dotenv";
import DailyWeather from "./DailyWeather";

function WeeklyWeather() {
  const LATITUDE: string = "37.5665";
  const LONGITUDE: string = "126.9780";
  const LANGUAGE: string = "kr";

  const weatherTitle: string = "이번주 날씨";
  const WEEKS: number[] = Array.from(Array(7).keys());
  const [weathers, setWeathers] = useState<string[]>([]);
  const [temperatures, setTemperatures] = useState<string[]>([]);
  const [icon, setIcon] = useState<string[]>([]);

  useEffect(() => {
    dotenv.config();
    const API_KEY = process.env.REACT_APP_API_KEY;
    let collectWeather: string[] = [];
    let collectTemperature: string[] = [];
    let collectIcon: string[] = [];
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=${LONGITUDE}&lang=${LANGUAGE}&exclude=${[
      "current",
      "minutely",
      "hourly",
    ]}&appid=${API_KEY}
    `)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        for (let i = 0; i < 7; i++) {
          let dayWeather: string = json.daily[i].weather[0].description;
          let dayTemperature: string = json.daily[i].temp.day;
          let dayIcon: string = json.daily[i].weather[0].icon;
          collectWeather.push(dayWeather);
          collectTemperature.push(dayTemperature);
          collectIcon.push(dayIcon);
        }
      })
      .then(() => {
        setWeathers(collectWeather);
        setTemperatures(collectTemperature);
        setIcon(collectIcon);
      })
      .then(() => {
        alert("날씨 정보 조회 완료");
      });
  }, []);

  return (
    <div>
      <Header3>{weatherTitle}</Header3>
      <WeatherBox>
        {WEEKS.map((e) => {
          let date = new Date();
          date.setDate(date.getDate() + e);
          return (
            <DailyWeather
              key={e}
              date={date}
              icon={icon[e]}
              weather={weathers[e]}
              temperature={temperatures[e]}
            />
          );
        })}
      </WeatherBox>
    </div>
  );
}

export default WeeklyWeather;
