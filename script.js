"use strict";

// 1. get value from inputs

const submit = document.querySelector(".submit-img");
const submitForm = document.querySelector("form");
const labels = [...document.querySelectorAll("label")];
// 2.display error msg on every input he :
// The month number is not between 1-12
// The year is in the future
// The date is invalid e.g. 31/04/1991 (there are 30 days in April)
// View the optimal layout for the interface depending on their device's screen size
// See hover and focus states for all interactive elements on the page

// 3. then submit and :
// store current year and month and day ;
// do calculation to years and months and days;

// 4. render it to UI ;

// window.addEventListener("DOMContentLoaded", () => {
//   submitForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     inputs.forEach((input, index) => {
//       if (input.value === "") {
//         errMsgs[index].innerHTML = "this field is required";
//         errMsgs[index].classList.remove("hide");

//         input.addEventListener("focus", (e) => {
//           input.style.border = "2px solid var(--primary-Light-red)";
//           errMsgs[index].classList.add("hide");
//         });
//       } else {
//         input.addEventListener("focus", (e) => {
//           input.style.border = "2px solid black";
//         });
//       }
//     });

//     // rest of your code
//   });
// });

// submit.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(122);

//   const sbmitEvent = new Event("submit");
//   submitForm.dispatchEvent(sbmitEvent);
//   // submitForm.submit();
// });

// submitForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Any field is empty when the form is submitted
//   inputs.forEach((input, index) => {
//     if (input.value === "") {
//       errMsgs[index].innerHTML = "this field is required";
//       errMsgs[index].classList.remove("hide");

//       labels[index].style.color = "red";
//       input.addEventListener("focus", (e) => {
//         input.style.border = "2px solid var(--primary-Light-red)";
//         errMsgs[index].classList.add("hide");
//       });
//     } else {
//       labels[index].style.color = "black";
//       input.addEventListener("focus", (e) => {
//         input.style.border = "2px solid black";
//       });

//       console.log(dayValue);
//     }
//   });
// });

// function calcAge() {}

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // day
  const currentDay = new Date().getDate();
  const day = document.getElementById("day");
  const dayValue = +day.value;
  const dayParent = day.parentElement;
  const err = dayParent.querySelector(".err-msg");
  if (day.value === "") {
    err.innerHTML = "This field is required";
    inputCheck(dayParent, err);
  } else if (Number.isNaN(dayValue)) {
    inputCheck(dayParent, err);
    err.innerHTML = "This field must be in numbers";
  } else if (dayValue > 31 || dayValue < 1) {
    err.innerHTML = "Insert your born day";
    inputCheck(dayParent, err);
  } else {
    dayParent.classList.remove("wrong");
    err.classList.add("hide");
    // renderDay(dayValue, currentDay);
  }

  // month
  const currentMonth = new Date().getMonth();
  const month = document.getElementById("month");
  const monthValue = +month.value;
  const monthParent = month.parentElement;
  const monthErreur = monthParent.querySelector(".err-msg");
  if (month.value === "") {
    monthErreur.innerHTML = "This field is required";
    inputCheck(monthParent, monthErreur);
  } else if (Number.isNaN(monthValue)) {
    inputCheck(monthParent, monthErreur);
    monthErreur.innerHTML = "This field must be in numbers";
  } else if (monthValue > 12 || monthValue < 1) {
    err.innerHTML = "Insert your born month";
    inputCheck(monthParent, monthErreur);
  } else {
    monthParent.classList.remove("wrong");
    monthErreur.classList.add("hide");
    // renderMonths(monthValue - 1, currentMonth);
  }

  // year
  const currentYear = new Date().getFullYear();
  const year = document.getElementById("year");
  const yearValue = +year.value;
  const yearParent = year.parentElement;
  const yearErreur = yearParent.querySelector(".err-msg");
  if (year.value === "") {
    yearErreur.innerHTML = "This field is required";
    inputCheck(yearParent, yearErreur);
  } else if (Number.isNaN(yearValue)) {
    inputCheck(yearParent, yearErreur);
    yearErreur.innerHTML = "This field must be in numbers";
  } else if (yearValue < 1920 || yearValue > currentYear) {
    yearErreur.innerHTML = "Insert your born year ";
    inputCheck(yearParent, yearErreur);
  } else {
    yearParent.classList.remove("wrong");
    yearErreur.classList.add("hide");
    // renderYear(yearValue, currentYear,monthValue,dayValue);
  }

  calcAndRender(yearValue, monthValue, dayValue);
});

function inputCheck(element, err) {
  element.classList.add("wrong");
  err.classList.remove("hide");
}

// function renderYear(year, currentYear,months,days) {
//   // 1.calc
//   const ageYear = currentYear - year;
//   // 2.render to UI
//   const yearUI = document.querySelector(".years-age");
//   yearUI.innerHTML = ageYear;
// }

// function renderMonths(months, currentMonth) {
//   // 1.calc
//   const ageMonth = currentMonth - months;
//   // 2.render to UI
//   const monthUI = document.querySelector(".months-age");
//   monthUI.innerHTML = ageMonth;
// }

// function renderDay(days, currentDay) {
//   // 1.calc
//   const ageDay = currentDay - days
//   // 2.render to UI
//   const dayUI = document.querySelector(".days-age");
//   dayUI.innerHTML = ageDay;
// }

// if (monthValue < 0 || (monthValue === 0 && dayValue < 0)) {
//   yearValue--;
//   monthValue += 12;
//   if (dayValue < 0) {
//     const monthDays = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       0
//     ).getDate();
//     dayValue += monthValue;
//     monthValue--;
//   }
// }

function calcAndRender(yearValue, monthValue, dayValue) {
  const today = new Date();

  // let yearDiff = today.getFullYear() - yearValue;
  // let monthDiff = today.getMonth() - (monthValue-1);
  // let dayDiff = today.getDate() - dayValue;

  let ageYears;
  let ageMonths;
  let ageDays;
  // Calculate age in years
  if (
    today.getMonth() > monthValue ||
    (today.getMonth() === monthValue && today.getDate() >= dayValue)
  ) {
    ageYears = today.getFullYear() - yearValue;
  } else {
    ageYears = today.getFullYear() - yearValue - 1;
  }

  // Calculate age in months
  if (today.getMonth() >= monthValue) {
    ageMonths = today.getMonth() - monthValue;
  } else {
    ageMonths = today.getMonth() + 12 - monthValue;
  }

  // Calculate age in days
  if (today.getDate() >= dayValue) {
    ageDays = today.getDate() - dayValue;
  } else {
    const daysInLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    ageDays = daysInLastMonth - dayValue + today.getDate();
    if (ageMonths === 0) {
      ageYears--;
      ageMonths = 11;
    } else {
      ageMonths--;
    }
  }

  // render to UI
  const yearUI = document.querySelector(".years-age");
  const monthUI = document.querySelector(".months-age");
  const dayUI = document.querySelector(".days-age");
  yearUI.innerHTML = ageYears;
  monthUI.innerHTML = ageMonths;
  dayUI.innerHTML = ageDays;
}
