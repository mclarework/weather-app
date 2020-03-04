const axios = require("axios");
const apiKey = "fe4fce40a84459165693c45b9787d939";

const getWeather = async (locationObject) => {
  const {lat,lng,location} = locationObject
  const URL = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
  try {
    const response = await axios.get(URL);
    return {
      location:location,
      data: response.data.currently
    }
    // console.log(
    //   `The weather in ${location} is ${
    //     response.data.currently.summary
    //   } and the temperature is ${(
    //     (response.data.currently.temperature - 32) *
    //     (5 / 9)
    //   ).toFixed(2)} degrees celcius.`
    // );
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getWeather };