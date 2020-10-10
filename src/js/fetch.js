 const key = "0a61bb2f5eb2f37828fb583ecf641a01";

export default {
  _city: "",

  fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this._city}&units=metric&appid=${key}`;
    return fetch(url)
      .then(res => res.json())

  },
  get city() {
    return this._city
  },
  set city(newCity) {
    this._city = newCity
  }
};