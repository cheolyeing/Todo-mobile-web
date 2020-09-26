class Weather {
  public weather: string;
  public month: number;
  public date: number;
  public day: string;
  public temperature_k: number;
  public tempurature_c: number;
  public icon: string;

  constructor(
    weather: string,
    month: number,
    date: number,
    day: string,
    temperature_k: number,
    icon: string
  ) {
    this.weather = weather;
    this.month = month;
    this.date = date;
    this.day = day;
    this.temperature_k = temperature_k;
    this.tempurature_c = 0;
    this.icon = icon;
  }
}

export default Weather;
