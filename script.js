const timemain = document.querySelector(".date h1");
const daymain = document.querySelector(".date p");
const weatherCards = document.querySelector(".weather-container");

let envir, images,symbol;
const num = 1;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  let hour = time.getHours();
  symbol = hour
  if (hour >= 17 && hour <= 24) {
    envir = "night";
  } else if (hour>=9 && hour <=15) {
    envir = "day";
  }
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  let minutes = time.getMinutes();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  timemain.innerHTML = hour + ":" + minutes + `<span>${ampm}</span>`;
  daymain.innerHTML = date + "th " + months[month] + ", " + days[day];
}, 1000);

let weather = {
  apikey: "1a14015d4dbae145fdf3a45ac98f0efd",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".discription").innerText = description;
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind Speed: " + speed + " km/h";
    document.body.style.backgroundImage =
      "url(https://source.unsplash.com/1900x1200/?" + name + ")";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

const search = document.querySelector(".search button");
search.addEventListener("click", function () {
  weather.search();
  weather1.search();
  weather1.remove();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
      weather1.search();
      weather1.remove();
    }
  });

weather.fetchWeather("Delhi");

let weather1 = {
  apikey1: "4R863FD7JJFTFWEYMPDP4NGGD",
  fetchWeather1: function (city) {
    fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        city +
        "?unitGroup=us&key=" +
        this.apikey1 +
        "&contentType=json"
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather1(data));
  },
  displayWeather1: function (data) {

    for (let i = 0; i < 7; i++) {
      let { datetime, temp, humidity, conditions ,icon} = data.days[i];
      const week = new Date(datetime);
      const day1 = week.getDay();
      datetime = days[day1];
      if (i == 0) {
        datetime = "Today";
      }
      if (i == 1) {
        datetime = "Tomorrow";
      }

      if (envir === "day") {images = "<i class='bx bxs-sun'></i>";}
      else if(envir == "night")  {images = "<i class='bx bxs-moon'></i>";}
       else {images = "<i class='bx bxl-google-cloud'></i>"};

      if(icon == "rain"){images = "<i class='bx bx-cloud-rain'></i>"}
      temp = Math.floor((temp - 32) / 1.8);
      let card1 = document.createElement("div");
      card1.classList.add("card1");
      card1.innerHTML = ` <p class="date2">${datetime}</p>
            <h1 class="temp">${temp}°C</h1>
            <div class="img">${images}</div>
            <div class="discription">${conditions}</div>
            <div class="humidity">Humidity: ${humidity}%</div>
            `;
      weatherCards.appendChild(card1);
    }
  },
  search: function () {
    const search_bar = document.querySelector(".search-bar").value;
    this.fetchWeather1(search_bar);
  },
  remove: function () {
    for (let i = 0; i < 7; i++) {
      const mydiv = document.querySelector(".card1");
      weatherCards.removeChild(mydiv);
    }
    console.log("hello");
  },
};

weather1.fetchWeather1("Delhi");
