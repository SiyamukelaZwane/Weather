let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

let today = document.querySelector("#todayDate");
today.innerHTML = ` ${day} ${hour}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input").value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput;
  let apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let actualTemp = document.querySelector(".temp");
  actualTemp.innerHTML = temperature;
  let weather = response.data.weather[0].main;
  let currentWeather = document.querySelector("#current-weather");
  currentWeather.innerHTML = weather;
  let humidity = Math.round(response.data.main.humidity);
  let actualHumidity = document.querySelector("#humid");
  actualHumidity.innerHTML = `Humidity : ${humidity}%`;
  let windy = response.data.wind.speed;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `Wind : ${windy} km/hr`;
  console.log(temperature);
  console.log(response.data.weather[0].main);
  console.log(response.data.main.humidity);
  console.log(response.data.wind.speed);
  console.log(response);
}
function showTemperature2(response) {
  let temperature = Math.round(response.data.main.temp);
  let actualTemp = document.querySelector(".temp");
  actualTemp.innerHTML = temperature;
  let weather = response.data.weather[0].main;
  let currentWeather = document.querySelector("#current-weather");
  currentWeather.innerHTML = weather;
  let humidity = Math.round(response.data.main.humidity);
  let actualHumidity = document.querySelector("#humid");
  actualHumidity.innerHTML = `Humidity : ${humidity}%`;
  let windy = response.data.wind.speed;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `Wind : ${windy} km/hr`;
  console.log(temperature);
  console.log(response.data.weather[0].main);
  console.log(response.data.main.humidity);
  console.log(response.data.wind.speed);
  console.log(response);
}
function showPosition(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat);
  console.log(lon);
  let apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
  apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl2).then(showTemperature2);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

let form = document.querySelector("#search-city");
form.addEventListener("submit", search);

//function unit(event) {
//event.preventDefault();
//let actualTemp = document.querySelector(".temp");
//actualTemp.innerHTML = "19";

//console.log(actualTemp);
//}

//let tempCelsius = document.querySelector("#celsius-link");
//tempCelsius.addEventListener("click", unit);

function units(event) {
  event.preventDefault();
  let actualTemp = document.querySelector(".temp");
  actualTemp.innerHTML = "66";

  console.log(actualTemp);
}
