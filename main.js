import * as dateFns from "https://cdn.skypack.dev/date-fns";

let man = [
  { name: "Robert", precent: 2, summ: 213000 },
  { name: "Dima", precent: 23 / 100, summ: 214 },
  { name: "Gaziz", precent: 24, summ: 215 },
  { name: "Riba", precent: 27, summ: 215 },
];

for (let num of man) {
  // console.log(num.precent);
}
let precent;
let thead = document.querySelector(".thead");
let tbody = document.querySelector("tbody");

function thCreation(classlist, text) {
  let th = document.createElement("th");
  th.classlist = classlist;
  th.innerText = text;
  return th;
}

thead.append(thCreation("thead", "precent"));
thead.append(thCreation("thead", "summ"));
let bonusTbody = document.querySelector(".bonusBody");

function tdCreation(classList, classList2) {
  for (let i = 0; i < man.length; i++) {
    let tr = document.createElement("tr");
    tbody.append(tr);
    let td = document.createElement("td");
    td.classList = classList;
    td.innerText = man[i].precent;
    tr.append(td);
    let td2 = document.createElement("td");
    td2.classList = classList2;
    td2.innerText = man[i].summ;
    tr.append(td2);
  }
}
tdCreation("precent", "sum");

function bonusCreation() {
  for (let i = 0; i < man.length; i++) {
    let tr = document.createElement("tr");
    bonusTbody.append(tr);
    let td = document.createElement("td");
    td.innerHTML = man[i].name;
    tr.append(td);
    let td2 = document.createElement("td");

    if (man[i].precent <= 10) {
      td2.innerHTML = "меньше 10";
    } else if (man[i].precent == 27) {
      td2.innerHTML = "ровно 27";
    }
    tr.append(td2);
  }
}

let monthsWithQuoter = {
  0: 1,
  1: 1,
  2: 1,
  3: 2,
  4: 2,
  5: 2,
  6: 3,
  7: 3,
  8: 3,
  9: 4,
  10: 4,
  11: 4,
};

let out3 = document.querySelector(".out3");

let resultUrl2 = window.location.href;

const url = new URL(resultUrl2);

let strDatefrom = url.searchParams.get("date_from");
let strDateto = url.searchParams.get("date_to");
console.log(strDatefrom);

// что подаем на вход:
//  arrDatefrom;
// что возвращаем  - return quarter

function findMonthQuarter(date) {
  let arrDataWithoutDot = date.split(".");
  let [day, month, year] = arrDataWithoutDot;
  let dateDayMonthYear = new Date(year, month, day);
  let findQuarter =
    monthsWithQuoter[
      dateDayMonthYear.getMonth()
    ]; /*  Это тоже самое, что и  let monthItemDT = arr.find((item) => item.month == Dateto.getMonth());
                                                                                       console.log(monthItemDT.quarter);   */
  return findQuarter;
}

let quaterFrom = findMonthQuarter(strDatefrom);
let quarterTo = findMonthQuarter(strDateto);
console.log(quaterFrom);
console.log(quarterTo);

// (man[i].summ / 100) * 1(man[i].summ / 100) * 1;

// let test1 = document.querySelector(".precent");
// let test3 = document.querySelector(".sum");

// function test2() {
//     for (let i=0; i < )
//   if (test1.innerHTML <= 10) {
//     let test4 = (test3.innerHTML / 100) * 1;
//     console.log(test4);
//   }
// }
// test2();

const period = url.searchParams.get("period");
let today = new Date();

/* День */
function periodDay() {
  if (period === "day") {
    strDatefrom = today;
    strDateto = today;
  }
}
/* День */
/* Прошлый День */
function yesterday() {
  if (period === "yesterday") {
    strDatefrom = dateFns.sub(today, { days: 1 });
    strDateto = strDatefrom;
  }
}
yesterday();
/* Прошлый День */
/* неделя */
function startEndWeek() {
  if (period === "week") {
    const startEndWeekUS = dateFns.startOfWeek(today);
    strDatefrom = dateFns.add(startEndWeekUS, { days: 1 });
    const lastDayWeekUS = dateFns.lastDayOfWeek(today);
    strDateto = dateFns.add(lastDayWeekUS, { days: 1 });
  }
}
startEndWeek();

/* неделя */

/* месяц */
function month() {
  if (period === "month") {
    const lastDayMonth = dateFns.lastDayOfMonth(today);
    const firstDayMonth = dateFns.startOfMonth(today);
    strDatefrom = firstDayMonth;
    strDateto = lastDayMonth;
  }
}
month();
/* месяц */
