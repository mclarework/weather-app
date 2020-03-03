const { getWeather } = require("./weather.js");
const { getLocation } = require("./location.js");
const figlet = require("figlet")

const main = async(input) => {
    const locationObject = await getLocation(input)
    await getWeather(locationObject)
};

if (startup == true ) {
    figlet("My Weather App!", (err,data)=> {
        if (err) {
            console.log("Something went wrong!")
            console.dir(err)
            return
        }
        console.log(data)
        main(process.argv[2])
    })
}

