const axios = require("axios");
const apiKey = "fe4fce40a84459165693c45b9787d939";
const mapBoxKey = "pk.eyJ1IjoiY2xvdWR3YWxrIiwiYSI6ImNrN2J1bGthdjAwNmgzZW5zdHo0bWdqcmkifQ.xJs1a1LpduxDMC6ueXzZfg"
const lat = 53.193
const long = -2.8931
const URL = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`;

const getWeather = async _ => {
  try {
    const response = await axios.get(URL);
    console.log(`The weather in ${response.data.timezone} is ${response.data.currently.summary} and the temperature is ${((response.data.currently.temperature-32)*(5/9)).toFixed(2)} degrees celcius.`);
  } catch (error) {
    console.error(error);
  }
};

getWeather();