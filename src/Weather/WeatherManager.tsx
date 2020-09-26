import Weather from "./Weather";

class WeatherManager {
  public weathers: Weather[];
  public startDate: Date;
  public lastSavedTime: Date;
  private WEATHER_LS: string = "weathers";
  private WEATHER_TIME_LS: string = "weathers_saved_at";
  private API_KEY: string = "48b0da616e1a822f8221af5e7a1f639e";
  private LATITUDE: string = "37.5665";
  private LONGITUDE: string = "126.9780";
  private LANGUAGE: string = "kr";
  private DAYS: string[] = ["일", "월", "화", "수", "목", "금", "토"];

  constructor() {
    this.weathers = [];
    this.startDate = new Date();
    this.lastSavedTime = new Date();
  }

  loadWeathers = () => {
    const loadedWeathers = localStorage.getItem(this.WEATHER_LS);
    if (loadedWeathers === null) {
    } else {
      const parsedWeathers = JSON.parse(loadedWeathers);
      this.weathers = parsedWeathers;
    }
  };

  loadTime = () => {
    const loadedTime = localStorage.getItem(this.WEATHER_TIME_LS);
    if (loadedTime === null) {
    } else {
      const parsedLastSavedTime = JSON.parse(loadedTime);
      this.lastSavedTime = parsedLastSavedTime;
    }
  };

  saveWeathers = () => {
    localStorage.setItem(this.WEATHER_LS, JSON.stringify(this.weathers));
  };

  updateWeathers = () => {
    this.saveWeathers();
  };

  callAPI = () => {
    let collectWeather: string[] = [];
    let collectTemperature: string[] = [];
    let collectIcon: string[] = [];
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${
      this.LATITUDE
    }&lon=${this.LONGITUDE}&lang=${this.LANGUAGE}&exclude=${[
      "current",
      "minutely",
      "hourly",
    ]}&appid=${this.API_KEY}
    `)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        for (let i = 0; i < 7; i++) {
          let dayWeather: string = json.daily[i].weather[0].description;
          let dayTemperature: string = json.daily[i].temp.day;
          let dayIcon: string = json.daily[i].weather[0].icon;
          let date: Date = new Date();
          date.setDate(date.getDate() + i);

          this.weathers.push(
            new Weather(
              dayWeather,
              date.getMonth() + 1,
              date.getDate(),
              this.DAYS[date.getDay()],
              +dayTemperature,
              dayIcon
            )
          );
        }
      })
      .then(() => {
        alert("날씨 정보 조회 완료");
      });
  };

  checkTimeValid = () => {};
}
export default WeatherManager;
