class UpdateMenu {
  getMenu(menu) {
    this.mealPlan = menu;

    // Polyfill for Date.prototype.getWeek()
    Date.prototype.getWeek = function () {
      var date = new Date(this.getTime());
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
      var week1 = new Date(date.getFullYear(), 0, 4);
      return (
        1 +
        Math.round(
          ((date.getTime() - week1.getTime()) / 86400000 -
            3 +
            ((week1.getDay() + 6) % 7)) /
            7
        )
      );
    };

    let today = new Date();
    let currentWeek = today.getWeek();

    let hostelSelect = document.getElementById("hostel").value;
    let weekOffset = 0;

    if (hostelSelect === "W-LH 1-4") {
      weekOffset = 1; // Add 1 to the current week for girls hostel
    } else if (hostelSelect === "S-BH 1-12") {
      weekOffset = 0; // No offset for boys hostel
    }

    currentWeek = (currentWeek + weekOffset) % 4;

    let currentDay = (today.getDay() + 6) % 7;

    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let week = document.getElementById("week");
    week.innerHTML = `Week: ${currentWeek + 1}`;

    let actualDay = days[currentDay];
    let day = document.getElementById("day");
    day.innerHTML = `Day: ${actualDay}`;

    let brkfst =
  
      this.mealPlan.weeks[currentWeek].days[currentDay].BREAKFAST.toLowerCase();

    let lunch =
      this.mealPlan.weeks[currentWeek].days[currentDay].LUNCH.toLowerCase();

    let snacks =
      this.mealPlan.weeks[currentWeek].days[currentDay].SNACKS.toLowerCase();

    let dinner =
      this.mealPlan.weeks[currentWeek].days[currentDay].DINNER.toLowerCase();

    //special menu
    /*let brkfst = "millet idli, veggies sambar, chuntney, tea";

    let lunch =
      "lemon rice, roti, dal fry, navaratna khorma, achary aloo, papad";

    let snacks = "masala pasta with veggies, coffee";

    let dinner =
      "jeera rice, puri, dal, pindi chole, vegetable chips, frymss, rasgulla";
*/
    
let id1 = document.getElementById("breakfast");
    id1.innerHTML = `${brkfst}`;

    let id2 = document.getElementById("lunch");
    id2.innerHTML = `${lunch}`;

    let id3 = document.getElementById("snacks");
    id3.innerHTML = `${snacks}`;

    let id4 = document.getElementById("dinner");
    id4.innerHTML = `${dinner}`;
  }

  startDailyUpdate(menu) {
    this.getMenu(menu);
    this.scheduleNextUpdate(menu);
  }

  scheduleNextUpdate(menu) {
    let now = new Date();
    let midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    );
    let timeUntilMidnight = midnight - now;

    setTimeout(() => {
      this.getMenu(menu);
      this.scheduleNextUpdate(menu);
    }, timeUntilMidnight);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let hostelSelect = document.getElementById("hostel");
  let previousHostel = localStorage.getItem("selectedHostel");

  if (previousHostel) hostelSelect.value = previousHostel;
  else hostelSelect.value = "S-BH 1-12"; // default value
  hostelSelect.dispatchEvent(new Event("change"));
});

let hostelSelect = document.getElementById("hostel");
hostelSelect.addEventListener("change", (e) => {
  let selectedHostel = e.target.value;
  localStorage.setItem("selectedHostel", selectedHostel);

  let asideElement = document.querySelector(".menu-pic");
  asideElement.classList.add("loading");

  let xhr = new XMLHttpRequest();
  xhr.open("GET", `../menu/${selectedHostel}.json`, true);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      let menu = JSON.parse(xhr.responseText);
      // Update the menu display
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

export { UpdateMenu };
