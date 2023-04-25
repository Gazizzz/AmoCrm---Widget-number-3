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

// let arr = [
//   { month: 00, quarter: 1 },
//   { month: 01, quarter: 1 },
//   { month: 02, quarter: 1 },
//   { month: 03, quarter: 2 },
//   { month: 04, quarter: 2 },
//   { month: 05, quarter: 2 },
//   { month: 06, quarter: 3 },
//   { month: 07, quarter: 3 },
//   { month: 08, quarter: 3 },
//   { month: 09, quarter: 4 },
//   { month: 10, quarter: 4 },
//   { month: 11, quarter: 4 },
// ];

let monthsWithQuoter = {
  00: 1,
  01: 1,
  02: 1,
  03: 2,
  04: 2,
  05: 2,
  06: 3,
  07: 3,
  08: 3,
  09: 4,
  10: 4,
  11: 4,
};

let out3 = document.querySelector(".out3");
let strDatefrom;
let strDateto;
let resultUrl = decodeURIComponent(location.search.substring(1)).split("&");

for (let i = 0; i < resultUrl.length; i++) {
  let indexDateFrom = resultUrl[i].indexOf("date_from");
  let indexDateto = resultUrl[i].indexOf("date_to");

  if (indexDateFrom != -1) {
    out3.innerHTML = `${resultUrl[i]} <br/  >`;
    strDatefrom = resultUrl[i];
  }
  if (indexDateto != -1) {
    out3.innerHTML += resultUrl[i];
    strDateto = resultUrl[i];
  }
}

// что подаем на вход:
//  arrDatefrom;
// что возвращаем  - return quarter
function findMonthQuarter(date) {
  let arrSansEqualDF = date.split("=");
  let itemDate = arrSansEqualDF[1];
  let arrDataWithoutDot = itemDate.split(".");
  let [day, month, year] = arrDataWithoutDot;
  let dateDayMonthYear = new Date(year, month, day);
  console.log();
  console.log(dateDayMonthYear.getDay());

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
let day;
const arrWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Cб", "Вс"];
let today = new Date();

/* День */
for (let i = 0; i < resultUrl.length; i++) {
  let indexToday = resultUrl[i].indexOf("period=day");
  if (indexToday != -1) {
    day = today;
  }
}
/* День */

/* неделя */ function week() {
  let DateFrom = new Date();
  let DateDoto = new Date();
  let newFrom;
  let newDOto;
  for (let i = 0; i < resultUrl.length; i++) {
    let indexWeek = resultUrl[i].indexOf("period=week");
    if (indexWeek != -1) {
      let dayOfWeek = today.getDay();
      let dayPassedWeek = arrWeek.length - dayOfWeek;
      DateFrom.setDate(DateFrom.getDate() - (dayOfWeek - 1));
      newFrom = DateFrom;
      DateDoto.setDate(DateDoto.getDate() + dayPassedWeek);
      newDOto = DateDoto;
    }
  }
  console.log(newFrom);
  console.log(newDOto);
}
week();
/* неделя */
/* месяц */

function month() {
  let monthDateDoto = new Date();
  let monthDateFrom = new Date();

  let samplebyYear = monthDateDoto.getFullYear();
  let samplebyMonth = monthDateDoto.getMonth();
  let samplebyDay = monthDateDoto.getDate();
  // let firstdayMonth = getDate();
  // console.log(firstdayMonth);

  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  let dotoMonth = getLastDayOfMonth(samplebyYear, samplebyMonth);
  monthDateDoto.setDate(monthDateDoto.getDate() + (dotoMonth - samplebyDay));
  monthDateFrom.setDate(monthDateFrom.getDate() - (samplebyDay - 1));
  console.log(monthDateDoto);
  console.log(monthDateFrom);
}
month();
/* месяц */

{
  /* <script>
  function dni() {
    var D = new Date(1999,11,31);
    D.setDate(D.getDate() + 3);
    alert(D);
  }
  </script> */
}
