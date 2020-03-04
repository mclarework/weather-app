const button = document.getElementById("submit");
const locate = document.getElementById("location");
const display = document.getElementById("display");

button.addEventListener("click", async () => {
  const weather = await fetch(
    `http://localhost:3005/weather?address=${locate.value}`
  );
  const response = await weather.json();
  console.log(response)
  display.textContent = `The weather in ${response.location} is ${
    response.data.summary
  } and the temperature is ${(
    (response.data.temperature - 32) *
    (5 / 9)
  ).toFixed(2)} degrees celcius.`
});
