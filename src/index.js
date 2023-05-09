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

// let out3 = document.querySelector(".out3");

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
// };
// test2();

const period = url.searchParams.get("period");
const needSendDate = url.searchParams.get("sendDate") === "true";

let postDataFilterDate = {
  type: "filter_leads",
  data: {
    from: "",
    to: "",
    manager_id: "",
  },
};

function getDateFrom() {
  if (period == "day") {
    return periodDay().timeFromTimestamp;
  }
  if (period == "yesterday") {
    return yesterday().yesterdayFromTimestamp;
  }
  if (period == "week") {
    return startEndWeek().timestampweekFrom;
  }
  if (period == "month") {
    return month().timestampMonthFrom;
  }
  if (period == "custom") {
    let parsestrDatefrom = dateFns.parse(strDatefrom, "dd.MM.yyyy", new Date());
    let dateFrom = parsestrDatefrom.getTime();
    return dateFrom;
  }
}

function getDateTo() {
  if (period == "day") {
    return periodDay().timeToTimestamp;
  }
  if (period == "yesterday") {
    return yesterday().yesterdayToTimestamp;
  }
  if (period == "week") {
    return startEndWeek().timestampWeekTo;
  }
  if (period == "month") {
    return month().timestampMonthTo;
  }
  if (period == "custom") {
    let parsestrDateTo = dateFns.parse(strDateto, "dd.MM.yyyy", new Date());
    let dateTo = parsestrDateTo.getTime();

    return dateTo;
  }
}
function getDateFromFormatted() {
  if (period == "day") {
    return periodDay().timeFrom;
  }
  if (period == "yesterday") {
    return yesterday().yesterdayFrom;
  }
  if (period == "week") {
    return startEndWeek().startEndWeekFrom;
  }
  if (period == "month") {
    return month().monthFrom;
  }
  if (period == "custom") {
    let parsestrDatefrom = dateFns.parse(strDatefrom, "dd.MM.yyyy", new Date());
    let dateFrom = parsestrDatefrom;
    return dateFrom;
  }
}
function getDateToFormatted() {
  if (period == "day") {
    return periodDay().timeTo;
  }
  if (period == "yesterday") {
    return yesterday().yesterdayTo;
  }
  if (period == "week") {
    return startEndWeek().startEndWeekTo;
  }
  if (period == "month") {
    return month().monthTo;
  }
  if (period == "custom") {
    let parsestrDateTo = dateFns.parse(strDateto, "dd.MM.yyyy", new Date());

    let dateTo = parsestrDateTo;

    return dateTo;
  }
}

let filterDateParams = {
  from: getDateFrom(),
  to: getDateTo(),
  fromFormatted: getDateFromFormatted(),
  toFormatted: getDateToFormatted(),
};

console.log(filterDateParams);

let postDataManagers = {
  type: "managers",
  data: {},
};

function loadManagers() {
  const queryParams = {
    type: "managers",
  };

  if (needSendDate) {
    queryParams.data = filterDateParams;
    console.log((queryParams.data = filterDateParams));
  }

  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://app.aaccent.su/jenyanour/",
      type: "post",
      data: queryParams,

      dataType: "json", // Expected response data type

      success: function (data) {
        console.log(data);
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}
function loadLeads(managerId) {
  const queryParams = {
    type: "filter_leads",
  };

  if (needSendDate) {
    queryParams.data = managerId;
    console.log((queryParams.data = managerId));
    queryParams.data = filterDateParams;
    queryParams.data.manager_id = managerId;
  }

  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://app.aaccent.su/jenyanour/",
      type: "POST",

      data: queryParams,

      dataType: "json", // Expected response data type
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}

function loadLeadsComplete(managerId) {
  const queryParams = {
    type: "filter_complete_leads",
  };

  if (needSendDate) {
    queryParams.data = filterDateParams;
    queryParams.data.manager_id = managerId;
  }
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://app.aaccent.su/jenyanour/",
      type: "post",
      data: queryParams,

      dataType: "json", // Expected response data type
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}
function renderManagers(managersArr) {
  const fragment = $(document.createDocumentFragment());

  managersArr.forEach((manager, index) => {
    let totalSumm = 0;
    let totalSummFormatted;
    const allLeadsCount = manager.leads.length + manager.leadsCompleted.length;
    const percentOfCompletedLeads = allLeadsCount
      ? Math.round((manager.leadsCompleted.length * 100) / allLeadsCount)
      : 0;
    // console.log(percentOfCompletedLeads);
    const $row = $("<tr>");
    const $index = $("<td>").text(index + 1);
    const $name = $("<td>").text(manager.name);
    const $percentActiveLeads = $("<td>").text(percentOfCompletedLeads + "%");
    manager.leadsCompleted.map((item, index) => {
      totalSumm += Number(item.lead_sum);
      totalSummFormatted = totalSumm.toLocaleString("en-US");
    });

    const $summ = $("<td>").text(totalSummFormatted);
    function bonusQuarter() {
      if (quarterTo == quaterFrom && percentOfCompletedLeads < 9) {
        return $("<td>").text(0);
      }
      if (
        percentOfCompletedLeads >= 10 &&
        quarterTo == quaterFrom &&
        percentOfCompletedLeads < 27
      ) {
        const tenPercent = $("<td>").text(
          Math.round((totalSumm / 100) * 1).toLocaleString("en-US")
        );
        return tenPercent;
      }
      if (
        percentOfCompletedLeads >= 27 &&
        quarterTo == quaterFrom &&
        percentOfCompletedLeads < 100
      ) {
        const twentySevenPrecent = $("<td>").text(
          Math.round((totalSumm / 100) * 2.7).toLocaleString("en-US")
        );
        return twentySevenPrecent;
      }
    }

    $row
      .append($index)
      .append($name)
      // .append($percentActiveLeads)
      // .append($summ)
      .append(bonusQuarter());
    fragment.append($row);
  });
  $("table tbody").append(fragment);
}
async function render() {
  const managers = await loadManagers();

  const newManagerListWithLeads = managers.map(async (item) => {
    const leads = await loadLeads(item.id);
    const leadsCompleted = await loadLeadsComplete(item.id);

    return { ...item, leads, leadsCompleted };
  });
  const result = await Promise.all(newManagerListWithLeads);

  console.log(result);
  renderManagers(result);
}
render();
