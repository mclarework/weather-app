const input = document.getElementById("searchBar");
const button = document.getElementById("submit");
const display = document.getElementById("display");

button.addEventListener("click", async () => {
  if (searchBar.value !== "") {
    const data = await fetch(
      `http://localhost:3005/weather?address=${input.value}`
    );
    const response = await data.json()
    console.log(response);
    display.textContent = `The weather in ${response.location} is ${response.data.summary} and the temperature is ${((response.data.temperature - 32) * (5/9)).toFixed(2)} degrees Celcius.`
  }
});
