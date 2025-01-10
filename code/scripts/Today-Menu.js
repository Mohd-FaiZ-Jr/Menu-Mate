import { UpdateMenu } from './Menu.js';

document.getElementById("menu-today").addEventListener("click", function () {

  let asideElement = document.querySelector(".menu-pic");
  asideElement.classList.add("loading");

  let hostelSelect = document.getElementById("hostel");
  let selectedHostel = hostelSelect.value;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `../menu/${selectedHostel}.json`, true);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      let menu = JSON.parse(xhr.responseText);
      let update = new UpdateMenu();
      update.startDailyUpdate(menu);
      asideElement.classList.remove("loading");
    } else {
      console.log("Error fetching the data: ", xhr.statusText);
    }
  };

  xhr.onerror = () => {
    console.log("Error fetching the data: ", xhr.statusText);
  };

  xhr.send();
});

document.addEventListener("DOMContentLoaded", function () {
  let hostelSelect = document.getElementById("hostel");
  let previousHostel = localStorage.getItem("selectedHostel");

  if (previousHostel) hostelSelect.value = previousHostel;
  else hostelSelect.value = "W-BH 1-12"; // default value
  hostelSelect.dispatchEvent(new Event("change"));
});