const url =
  "https://api.openweathermap.org/data/2.5/weather?appid=45ef503e411d31d957dd70b1cf2df88d&units=metric&q=";

const inputVal = document.querySelector(".inputVal");
const searchBtn = document.querySelector(".searchBtn");
const temp = document.querySelector(".temp");
const city = document.querySelector(".location");
const humidityVal = document.querySelector(".humidityVal");
const windSpeed = document.querySelector(".windSpeed");
const type = document.querySelector(".type");
const time = document.querySelector(".time");
const dddmmyy = document.querySelector(".date");
let img = document.querySelector(".image");

searchBtn.addEventListener("click", () => {
  console.log(inputVal.value);
  fetchData(inputVal.value);
  inputVal.value = "";
});

async function fetchData(cityName) {
  console.log(url + cityName);
  let response = await fetch(url + cityName);
  var data = await response.json();
  console.dir(data);
  temp.innerText = data.main.temp + "°C";
  city.innerText = data.name;
  humidityVal.innerText = data.main.humidity + "%";
  windSpeed.innerText = data.wind.speed + "km/hr";
  type.innerText = data.weather[0].main;
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
const date = new Date();
const currentTime = date.toLocaleTimeString();
dddmmyy.innerText = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
console.dir(date);
console.log(date.getFullYear());

function updateTime() {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var t_str = hours + ":" + minutes + " ";
  if (hours > 11) {
    t_str += "PM";
  } else {
    t_str += "AM";
  }
  time.innerText = t_str;
}
setInterval(updateTime, 1000);
