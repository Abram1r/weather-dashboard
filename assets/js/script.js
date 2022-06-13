var apiKey = "9e479cb68def2b3ab5f24efdac43555b";
var city = document.querySelector("#cityInput");
var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey


fetch(apiURL)


//"https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&appid=9e479cb68def2b3ab5f24efdac43555b"
//console.log(response.weather)
//console.log(response.main)