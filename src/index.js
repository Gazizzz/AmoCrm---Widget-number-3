import * as dateFns from "date-fns";
import {
  periodDay,
  yesterday,
  startEndWeek,
  month,
  strDatefrom,
  strDateto,
  url,
} from "./helpers.js";

let man = [
  { index: 1, name: "Robert", precent: 2, summ: 213000 },
  { index: 2, name: "Dima", precent: 23 / 100, summ: 214 },
  { index: 3, name: "Gaziz", precent: 24, summ: 215 },
  { index: 4, name: "Riba", precent: 27, summ: 215 },
];

let precent;
let thead = document.querySelector(".js-thead");
let tbody = document.querySelector(".js-tbody");
let table = document.querySelector(".js-table");

function thCreation(classlist, text) {
  let th = document.createElement("th");
  th.scope = classlist;
  th.innerText = text;
  return th;
}
function theadAppend() {
  let theadFragment = new DocumentFragment();
  thead.append(thCreation("col", "#"));
  thead.append(thCreation("col", "Name"));
  thead.append(thCreation("col", "Precent"));
  thead.append(thCreation("col", "Summ"));
  theadFragment.append(thead);
  return theadFragment;
}

table.append(theadAppend());

function tbodyCreation() {
  man.forEach((element) => {
    // let fragment = new DocumentFragment();
    let tr = document.createElement("tr");

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
    tbody.append(tr);
  });
}
tbodyCreation();

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
/* День */
if (period === "day") {
  console.log(periodDay());
}

/* День */

/* Прошлый День */
if (period === "yesterday") {
  console.log(yesterday());
}

/* Прошлый День */

/* неделя */
if (period === "week") {
  console.log(startEndWeek());
}

/* неделя */

/* месяц */
if (period === "month") {
  console.log(month());
}

/* месяц */
