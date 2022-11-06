let weather = {
    apiKey: "API KEY GOES HERE",
    fetchWeather: function (city) {
      fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`
      )
        .then((response) => {
          if (!response.ok) {
            alert("Cannot found.");
            throw new Error("Cannot found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      var { name } = data;
      var { icon, description } = data.weather[0];
      var { temp, humidity } = data.main;
      var { speed } = data.wind;
      var { deg } = data.wind; 
      var { gust } = data.wind;


      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      
      document.querySelector(".temp").innerText = 
        ((temp - 272.15)/1).toFixed(2) + "°C";
 

      document.querySelector(".humidity").innerText =
        humidity + "%";

      document.querySelector(".wind").innerText =
        speed + " mph";

      document.querySelector(".winddeg").innerText =
        deg + "°";

      document.querySelector(".gust").innerText =
          gust + " mph";


      document.querySelector(".weather").classList.remove("loading");

      document.body.style.backgroundImage = 
        "url('" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Malaysia");