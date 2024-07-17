const url =
  "https://api.openweathermap.org/data/2.5/weather?appid=45ef503e411d31d957dd70b1cf2df88d&units=metric&q=";
const getTime =
  "https://api.api-ninjas.com/v1/worldtime?X-Api-Key=OQrlZqUXQ8f89GtRfmRTsw==RvgvwSdK2lT0cjQb";

const inputVal = document.querySelector(".inputVal");
const searchBtn = document.querySelector(".searchBtn");
const temp = document.querySelector(".temp");
const city = document.querySelector(".location");
const humidityVal = document.querySelector(".humidityVal");
const windSpeed = document.querySelector(".windSpeed");
const type = document.querySelector(".type");
const time = document.querySelector(".time");
const dddmmyy = document.querySelector(".date");
const img = document.querySelector(".image");
const day = document.querySelector(".day");

async function date_time(lat, lon) {
  let response = await fetch(`${getTime}&lat=${lat}&lon=${lon}`);
  var data = await response.json();
  dddmmyy.innerText = data.date;
  time.innerText = `${data.hour}:${data.minute}`;
  day.innerText = data.day_of_week;
}

searchBtn.addEventListener("click", () => {
  fetchData(inputVal.value);
});

async function fetchData(cityName) {
  let response = await fetch(url + cityName);
  var data = await response.json();
  date_time(data.coord.lat, data.coord.lon);
  temp.innerText = data.main.temp + "°C";
  city.innerText = data.name;
  humidityVal.innerText = data.main.humidity + "%";
  windSpeed.innerText = data.wind.speed + "km/hr";
  type.innerText = data.weather[0].main;
  inputVal.value = "";
  if (data.weather[0].main == "Clouds") {
    img.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    img.src = "./images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    img.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Haze") {
    img.src = "./images/haze.png";
  } else if (data.weather[0].main == "Mist") {
    img.src = "./images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    img.src = "./images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    img.src = "./images/snow.png";
  }
}
fetchData("patiala");
