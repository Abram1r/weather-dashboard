var apiKey = "9e479cb68def2b3ab5f24efdac43555b";
var button = document.querySelector(".btn")
var inputValue = document.querySelector(".inputValue")
currentTemp = $("#temperature")
currentHumidity = $("#humidity")
currentWindSpeed = $("#windSpeed")
currentUvi = $("#uvIndex")
//var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey

// weather search request

button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&appid=9e479cb68def2b3ab5f24efdac43555b")
     .then(response => response.json())
     .then(data => { 
       var nameValue = data["name"];
       var tempValue = data["main"]["temp"];
       var descValue = data["weather"][0]["description"];

       name.innerHTML = nameValue;
       temp.innerHTML = tempValue;
       desc.innerHTML = descValue;
     }) 

    
            
    .catch(error => alert("wrong city name"))
})
    
           // currentTemp.text(response.main),
          //  currentHumidity.text(response.main.humidity + "%"),
          //  currentWindSpeed.text(response.wind.speed + "MPH"),
           // currentUvi.text(response.value))
     

//fetch(apiURL)
//currentWeatherSearch()

//"https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&appid=9e479cb68def2b3ab5f24efdac43555b"
//console.log(response.weather)
//console.log(response.main)