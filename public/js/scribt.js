console.log("js code from browser");

// Dom elements
const weatherForm = document.querySelector("form");
const formInput = document.querySelector("input");
const message1 = document.querySelector(".message-1");
const message2 = document.querySelector(".message-2");
//......................................................
const clearMessages = () => {
  message1.textContent = "";
  message2.textContent = "";
};
// this function gets the data from the server.
const getData = async (_location) => {
  try {
    console.log();
    const res = await fetch(`/weather?address=${_location}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    const location = data.location;
    const forecast = data.forecast;
    return { location, forecast };
  } catch (error) {
    throw error;
  }
};
// Rendering location and forecast.
const renderData = (data) => {
  clearMessages();
  message1.textContent = data.location;
  message2.textContent = data.forecast;
};
const renderError = (errorMessage) => {
  clearMessages();
  message1.textContent = errorMessage;
};
const renderLoading = () => {
  clearMessages();
  message1.textContent = "Loading...";
};
const render = async (event) => {
  try {
    event.preventDefault();
    renderLoading();
    const location = formInput.value;
    const data = await getData(location);
    renderData(data);
    formInput.value = "";
  } catch (error) {
    renderError(error.message);
  }
};
//..................................................
weatherForm.addEventListener("submit", render);
