import item from "../template/item.hbs";
import refs from "./refs";
import fetch from "./fetch.js";
// import moment from 'moment';
// import momenthb from "handlebars.moment"



refs.form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.currentTarget.city.value);
  fetch.city = event.currentTarget.city.value;
  refs.input.value = "";
  refs.dayList.innerHTML = "";
  fetch.fetchWeather().then(data => render({ data }));
});
function render(data) {
  const templateItem = item(data);
  refs.dayList.insertAdjacentHTML("beforeend", templateItem)
  console.log(templateItem);
}


