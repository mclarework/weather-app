const { getWeather } = require("./weather.js");
const { getLocation } = require("./location.js");

const main = async(input) => {
    const locationObject = await getLocation(input)
    await getWeather(locationObject)
};

main(process.argv[2])