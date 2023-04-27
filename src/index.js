import * as dateFns from "date-fns";
import { PeriodDay, Yesterday, StartEndWeek, Month } from "./helpers.js";

let man = [
  { index: 1, name: "Robert", precent: 2, summ: 213000 },
  { index: 2, name: "Dima", precent: 23 / 100, summ: 214 },
  { index: 3, name: "Gaziz", precent: 24, summ: 215 },
  { index: 4, name: "Riba", precent: 27, summ: 215 },
];

for (let num of man) {
  // console.log(num.precent);
}
let precent;
let thead = document.querySelector(".thead");
let tbody = document.querySelector("tbody");

function thCreation(classlist, text) {
  let th = document.createElement("th");
  th.scope = classlist;
  th.innerText = text;
  return th;
}

thead.append(thCreation("col", "#"));
thead.append(thCreation("col", "Name"));
thead.append(thCreation("col", "Precent"));
thead.append(thCreation("col", "Summ"));

function bonusCreation() {
  man.forEach((element) => {
    let tr = document.createElement("tr");
    tbody.append(tr);
    let thFirst = document.createElement("th");
    tr.append(thFirst);
    thFirst.scope = "row";
    thFirst.innerHTML = element.index;
    let tdSecond = document.createElement("td");
    tr.append(tdSecond);
    tdSecond.innerHTML = element.name;
    let tdThird = document.createElement("td");
    tr.append(tdThird);
    tdThird.innerHTML = element.precent;
    let tdForth = document.createElement("td");
    tr.append(tdForth);
    tdForth.innerHTML = element.summ;
  });
}
bonusCreation();
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

/* День */
console.log(PeriodDay());

/* День */

/* Прошлый День */
console.log(Yesterday());
/* Прошлый День */

/* неделя */
console.log(StartEndWeek());
/* неделя */

/* месяц */

console.log(Month());

/* месяц */
