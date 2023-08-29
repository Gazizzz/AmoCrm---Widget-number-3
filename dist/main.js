/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let monthsWithQuoter = {
  1: 1,
  2: 1,
  3: 1,
  4: 2,
  5: 2,
  6: 2,
  7: 3,
  8: 3,
  9: 3,
  10: 4,
  11: 4,
  12: 4,
};

let date = new Date();
// const formattedDate = dateFns.format(date, "dd.MM.yyyy");
const formattedDate = new Date()
  .toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
  .split("/")
  .join(".");
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
// const period = url.searchParams.get("period");
// const needSendDate = url.searchParams.get("sendDate") === "true";
const currentDate = new Date();
let currentQuater = findMonthQuarter(formattedDate);
function quarterPrevious() {
  if (currentQuater === 1) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-01-01`);
    dateFrom.setHours(23);
    dateFrom.setMinutes(59);
    dateFrom.setSeconds(59);
    let timestamptDateFrom = dateFrom.getTime() / 1000;

    let dateTo = new Date(`${currentDate.getFullYear()}-03-31`);
    dateTo.setHours(23);
    dateTo.setMinutes(59);
    dateTo.setSeconds(59);

    let timestamptDateTo = dateTo.getTime() / 1000;

    return { timestamptDateFrom, timestamptDateTo };
  }
  if (currentQuater === 2) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-04-01`);
    dateFrom.setHours(23);
    dateFrom.setMinutes(59);
    dateFrom.setSeconds(59);
    let timestamptDateFrom = dateFrom.getTime() / 1000;
    let dateTo = new Date(`${currentDate.getFullYear()}-06-30`);
    dateTo.setHours(23);
    dateTo.setMinutes(59);
    dateTo.setSeconds(59);
    let timestamptDateTo = dateTo.getTime() / 1000;
    return { timestamptDateFrom, timestamptDateTo };
  }
  if (currentQuater === 3) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-07-01`);
    dateFrom.setHours(23);
    dateFrom.setMinutes(59);
    dateFrom.setSeconds(59);
    let timestamptDateFrom = dateFrom.getTime() / 1000;
    let dateTo = new Date(`${currentDate.getFullYear()}-09-30`);
    dateTo.setHours(23);
    dateTo.setMinutes(59);
    dateTo.setSeconds(59);
    let timestamptDateTo = dateTo.getTime() / 1000;
    return { timestamptDateFrom, timestamptDateTo };
  }
  if (currentQuater === 4) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-10-01`);
    dateFrom.setHours(23);
    dateFrom.setMinutes(59);
    dateFrom.setSeconds(59);
    let timestamptDateFrom = dateFrom.getTime() / 1000;
    let dateTo = new Date(`${currentDate.getFullYear()}-12-31`);
    dateTo.setHours(23);
    dateTo.setMinutes(59);
    dateTo.setSeconds(59);
    let timestamptDateTo = dateTo.getTime() / 1000;
    return { timestamptDateFrom, timestamptDateTo };
  }
}
let getTimeMonthFrom;
const headerFrom = document.querySelector(".header-from");
let yearr = new Date().getFullYear();
let periodYear = document.querySelectorAll(".periodYear");
periodYear.forEach((year) => {
  year.addEventListener("click", (e) => {
    yearr = e.target.innerHTML;
  });
});
const periodQuarter = document.querySelectorAll(".quarterPeriod");

periodQuarter.forEach((quarter) => {
  quarter.addEventListener("click", (e) => {
    const currentQuater = Number(e.target.dataset.number);
    function quarterPrevious() {
      if (currentQuater === 1) {
        let dateFrom = new Date(`${yearr}-01-01`);
        dateFrom.setHours(0);
        dateFrom.setMinutes(59);
        dateFrom.setSeconds(59);

        let timestamptDateFrom = dateFrom.getTime() / 1000;

        let dateTo = new Date(`${yearr}-03-31`);
        dateTo.setHours(23);
        dateTo.setMinutes(59);
        dateTo.setSeconds(59);

        let timestamptDateTo = dateTo.getTime() / 1000;

        return { timestamptDateFrom, timestamptDateTo };
      }
      if (currentQuater === 2) {
        let dateFrom = new Date(`${yearr}-04-01`);
        dateFrom.setHours(0);
        dateFrom.setMinutes(0);
        dateFrom.setSeconds(0);
        let timestamptDateFrom = dateFrom.getTime() / 1000;
        let dateTo = new Date(`${yearr}-06-30`);
        dateTo.setHours(23);
        dateTo.setMinutes(59);
        dateTo.setSeconds(59);
        let timestamptDateTo = dateTo.getTime() / 1000;
        return { timestamptDateFrom, timestamptDateTo };
      }
      if (currentQuater === 3) {
        let dateFrom = new Date(`${yearr}-07-01`);
        dateFrom.setHours(0);
        dateFrom.setMinutes(0);
        dateFrom.setSeconds(0);
        let timestamptDateFrom = dateFrom.getTime() / 1000;
        let dateTo = new Date(`${yearr}-09-30`);
        dateTo.setHours(23);
        dateTo.setMinutes(59);
        dateTo.setSeconds(59);
        let timestamptDateTo = dateTo.getTime() / 1000;
        return { timestamptDateFrom, timestamptDateTo };
      }
      if (currentQuater === 4) {
        let dateFrom = new Date(`${yearr}-10-01`);
        dateFrom.setHours(0);
        dateFrom.setMinutes(0);
        dateFrom.setSeconds(0);
        let timestamptDateFrom = dateFrom.getTime() / 1000;
        let dateTo = new Date(`${yearr}-12-31`);
        dateTo.setHours(23);
        dateTo.setMinutes(59);
        dateTo.setSeconds(59);
        let timestamptDateTo = dateTo.getTime() / 1000;
        return { timestamptDateFrom, timestamptDateTo };
      }
    }
    const quarterNumb = e.target.innerHTML;
    headerFrom.innerHTML = `Период: ${quarterNumb} квартал ${yearr} года`;

    render({
      from: quarterPrevious().timestamptDateFrom,
      to: quarterPrevious().timestamptDateTo,
      currentQuater,
    });
  });
});
let periodNinetyDays = new Date();
periodNinetyDays.setHours(0);
periodNinetyDays.setMinutes(0);
periodNinetyDays.setSeconds(0);
function quarterCurrent() {
  // let resultDate = dateFns.subDays(periodNinetyDays, 90);
  const resultDate = new Date(
    new Date(periodNinetyDays).getTime() - 90 * 24 * 60 * 60 * 1000
  );
  let timestamptDateFrom = Math.floor(resultDate.getTime() / 1000);
  let periodNinetyDayEnd = new Date();
  periodNinetyDayEnd.setHours(0);
  periodNinetyDayEnd.setMinutes(59);
  periodNinetyDayEnd.setSeconds(59);
  let timestamptDateTo = Math.floor(periodNinetyDayEnd.getTime() / 1000);
  return { timestamptDateFrom, timestamptDateTo };
}

let filterDateParams = {
  from: quarterCurrent().timestamptDateFrom,
  to: quarterCurrent().timestamptDateTo,
};
let filterDateParamss = {
  from: quarterPrevious().timestamptDateFrom,
  to: quarterPrevious().timestamptDateTo,
};

function loadManagers() {
  const queryParams = {
    type: "managers",
  };

  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://amaranta.im3000.ru/bot/widget/my/users_json.php",
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

function loadCompanies(query) {
  return new Promise((resolve, reject) => {
    const filterQuery = query || filterDateParams;
    const queryParams = {
      filterQuery,
    };

    $.ajax({
      url: "https://amaranta.im3000.ru/bot/widget/my/companies_json.php",
      method: "get",
      dataType: "json",
      data: filterQuery,
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}
function filterLeadsByManager(leads, managerId) {
  const filteredData = leads.filter((item) => {
    const dateStr = item.created_at;
    const dateObj = new Date(dateStr);
    // dateObj.setHours(0, 0);
    const month = (dateObj.getMonth() + 1).toString().replace(/^0+/, "");

    function findMonthQuarter(date) {
      let findQuarter = monthsWithQuoter[date];
      return findQuarter;
    }

    const currentQuater = findMonthQuarter(month);

    return (
      Number(item.responsible_id) === managerId
      // &&
      //
      // currentQuater <= query.currentQuater
      // 2 <= 2
    );
  });

  return filteredData;
}
function loadLeads(query) {
  const filterQuery = query || filterDateParams;
  const queryParams = {
    type: "filter_leads",
    data: filterQuery,
  };

  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://amaranta.im3000.ru/bot/widget/",
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
function filterLeads(leadss, managerId) {
  const filteredDataLeadsCompany = leadss.filter(
    (item) => Number(item.company_responsible_id) == managerId
  );

  return filteredDataLeadsCompany;
}

function loadLeadsComplete(query) {
  const filterQuery = query || filterDateParamss;
  const queryParams = {
    type: "filter_complete_leads",
    data: filterQuery,
  };
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://amaranta.im3000.ru/bot/widget/",
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
function filterLeadsComplete(leadss, managerId) {
  const filteredDataLeadsComplete = leadss.filter(
    (item) => Number(item.lead_responsible_id) == managerId
  );

  return filteredDataLeadsComplete;
}
function renderManagers(managersArr) {
  const fragment = $(document.createDocumentFragment());
  const tableEl = $(".js-tbody");
  let num = 0;
  managersArr.forEach((manager, index) => {
    let totalSumm = 0;
    let totalSummFormatted;
    const allLeadsCount = manager.allManagerLeads.length;
    const percentOfCompletedLeads = allLeadsCount
      ? Math.round((manager.leadCount * 100) / allLeadsCount)
      : 0;

    const $row = $("<tr>");
    const $index = $("<td>").text((num = num + 1));
    const $name = $("<td>").text(manager.name);
    const $percentActiveLeads = $("<td>").text(percentOfCompletedLeads + "%");
    $percentActiveLeads.addClass("js-Center");
    manager.leadsFilterComppleted.map((item, index) => {
      totalSumm += Number(item.lead_sum);

      totalSummFormatted = totalSumm.toLocaleString("en-US");
    });
    if (totalSumm < 0) {
      totalSummFormatted = 0;
    } else {
      totalSummFormatted = totalSumm.toLocaleString("en-US");
    }
    const $QuarterlyBonusAmount = $("<td>").text(
      `${percentOfCompletedLeads / 10}%`
    );
    $QuarterlyBonusAmount.addClass("js-Center");
    const $summ = $("<td>").text(totalSummFormatted);
    function bonusQuarter() {
      const Percent = $("<td>").text(
        Math.round(
          (totalSumm / 100) * (percentOfCompletedLeads / 10)
        ).toLocaleString("en-US")
      );
      return Percent;
    }

    $row
      .append($index)
      .append($name)
      // .append(totalSummFormatted)
      .append($percentActiveLeads)
      .append($QuarterlyBonusAmount)
      .append($summ)
      .append(bonusQuarter());
    fragment.append($row);
  });
  tableEl.empty();
  tableEl.append(fragment);
}
function filterLeads2(leadss, amo_id) {
  const filteredDatas = leadss.filter((item) => item.amo_company_id == amo_id);

  return filteredDatas;
}

async function render(query) {
  const managers = await loadManagers();
  // 1. загрузить все лиды
  const allCompanies = await loadCompanies(query);

  const leads = await loadLeads(query);
  const leadsCompleted = await loadLeadsComplete(query);
  const allLeadsWithCompanies = allCompanies.map((company) => {
    const companyLeads = filterLeads2(leads, company.amo_id);

    return {
      ...company,
      companyLeads,
    };
  });

  const newManagerListWithLeads = managers.map(async (item) => {
    // отфильтолвать лиды по менеджеру
    const allManagerLeads = filterLeadsByManager(allCompanies, item.id, query);
    const leadsFilterCompany = filterLeads(leads, item.id);

    const leadsFilterComppleted = filterLeadsComplete(leadsCompleted, item.id);
    const filteredCompaniesByManager = allLeadsWithCompanies.filter(
      (company) => {
        return (
          company.companyLeads.length > 0 && company.responsible_id == item.id
        );
      }
    );

    const leadCount = filteredCompaniesByManager.reduce((acc, curr) => {
      if (curr.responsible_id == item.id) {
        acc = acc + 1;
      }

      return acc;
    }, 0);
    return {
      ...item,
      /*leads,*/ /*leadsCompleted,*/ allManagerLeads,
      leadsFilterCompany,
      leadCount,
      leadsFilterComppleted,
    };
  });
  const result = await Promise.all(newManagerListWithLeads);

  renderManagers(result);
  const centerStyle = document.querySelectorAll(".js-Center");

  centerStyle.forEach((element) => {
    element.style.textAlign = "center";
  });
}
render({
  from: quarterCurrent().timestamptDateFrom,
  to: quarterCurrent().timestamptDateTo,

  currentQuater,
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwySEFBMkg7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwwQkFBMEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSwrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBCQUEwQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwwQkFBMEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMEJBQTBCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGFBQWEsVUFBVSxPQUFPO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkJBQTZCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lkZ2V0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBtb250aHNXaXRoUXVvdGVyID0ge1xyXG4gIDE6IDEsXHJcbiAgMjogMSxcclxuICAzOiAxLFxyXG4gIDQ6IDIsXHJcbiAgNTogMixcclxuICA2OiAyLFxyXG4gIDc6IDMsXHJcbiAgODogMyxcclxuICA5OiAzLFxyXG4gIDEwOiA0LFxyXG4gIDExOiA0LFxyXG4gIDEyOiA0LFxyXG59O1xyXG5cclxubGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4vLyBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF0ZUZucy5mb3JtYXQoZGF0ZSwgXCJkZC5NTS55eXl5XCIpO1xyXG5jb25zdCBmb3JtYXR0ZWREYXRlID0gbmV3IERhdGUoKVxyXG4gIC50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1HQlwiLCB7XHJcbiAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgbW9udGg6IFwiMi1kaWdpdFwiLFxyXG4gICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgfSlcclxuICAuc3BsaXQoXCIvXCIpXHJcbiAgLmpvaW4oXCIuXCIpO1xyXG5mdW5jdGlvbiBmaW5kTW9udGhRdWFydGVyKGRhdGUpIHtcclxuICBsZXQgYXJyRGF0YVdpdGhvdXREb3QgPSBkYXRlLnNwbGl0KFwiLlwiKTtcclxuICBsZXQgW2RheSwgbW9udGgsIHllYXJdID0gYXJyRGF0YVdpdGhvdXREb3Q7XHJcbiAgbGV0IGRhdGVEYXlNb250aFllYXIgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcclxuICBsZXQgZmluZFF1YXJ0ZXIgPVxyXG4gICAgbW9udGhzV2l0aFF1b3RlcltcclxuICAgICAgZGF0ZURheU1vbnRoWWVhci5nZXRNb250aCgpXHJcbiAgICBdOyAvKiAg0K3RgtC+INGC0L7QttC1INGB0LDQvNC+0LUsINGH0YLQviDQuCAgbGV0IG1vbnRoSXRlbURUID0gYXJyLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubW9udGggPT0gRGF0ZXRvLmdldE1vbnRoKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtb250aEl0ZW1EVC5xdWFydGVyKTsgICAqL1xyXG4gIHJldHVybiBmaW5kUXVhcnRlcjtcclxufVxyXG4vLyBjb25zdCBwZXJpb2QgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInBlcmlvZFwiKTtcclxuLy8gY29uc3QgbmVlZFNlbmREYXRlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzZW5kRGF0ZVwiKSA9PT0gXCJ0cnVlXCI7XHJcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxubGV0IGN1cnJlbnRRdWF0ZXIgPSBmaW5kTW9udGhRdWFydGVyKGZvcm1hdHRlZERhdGUpO1xyXG5mdW5jdGlvbiBxdWFydGVyUHJldmlvdXMoKSB7XHJcbiAgaWYgKGN1cnJlbnRRdWF0ZXIgPT09IDEpIHtcclxuICAgIGxldCBkYXRlRnJvbSA9IG5ldyBEYXRlKGAke2N1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCl9LTAxLTAxYCk7XHJcbiAgICBkYXRlRnJvbS5zZXRIb3VycygyMyk7XHJcbiAgICBkYXRlRnJvbS5zZXRNaW51dGVzKDU5KTtcclxuICAgIGRhdGVGcm9tLnNldFNlY29uZHMoNTkpO1xyXG4gICAgbGV0IHRpbWVzdGFtcHREYXRlRnJvbSA9IGRhdGVGcm9tLmdldFRpbWUoKSAvIDEwMDA7XHJcblxyXG4gICAgbGV0IGRhdGVUbyA9IG5ldyBEYXRlKGAke2N1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCl9LTAzLTMxYCk7XHJcbiAgICBkYXRlVG8uc2V0SG91cnMoMjMpO1xyXG4gICAgZGF0ZVRvLnNldE1pbnV0ZXMoNTkpO1xyXG4gICAgZGF0ZVRvLnNldFNlY29uZHMoNTkpO1xyXG5cclxuICAgIGxldCB0aW1lc3RhbXB0RGF0ZVRvID0gZGF0ZVRvLmdldFRpbWUoKSAvIDEwMDA7XHJcblxyXG4gICAgcmV0dXJuIHsgdGltZXN0YW1wdERhdGVGcm9tLCB0aW1lc3RhbXB0RGF0ZVRvIH07XHJcbiAgfVxyXG4gIGlmIChjdXJyZW50UXVhdGVyID09PSAyKSB7XHJcbiAgICBsZXQgZGF0ZUZyb20gPSBuZXcgRGF0ZShgJHtjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpfS0wNC0wMWApO1xyXG4gICAgZGF0ZUZyb20uc2V0SG91cnMoMjMpO1xyXG4gICAgZGF0ZUZyb20uc2V0TWludXRlcyg1OSk7XHJcbiAgICBkYXRlRnJvbS5zZXRTZWNvbmRzKDU5KTtcclxuICAgIGxldCB0aW1lc3RhbXB0RGF0ZUZyb20gPSBkYXRlRnJvbS5nZXRUaW1lKCkgLyAxMDAwO1xyXG4gICAgbGV0IGRhdGVUbyA9IG5ldyBEYXRlKGAke2N1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCl9LTA2LTMwYCk7XHJcbiAgICBkYXRlVG8uc2V0SG91cnMoMjMpO1xyXG4gICAgZGF0ZVRvLnNldE1pbnV0ZXMoNTkpO1xyXG4gICAgZGF0ZVRvLnNldFNlY29uZHMoNTkpO1xyXG4gICAgbGV0IHRpbWVzdGFtcHREYXRlVG8gPSBkYXRlVG8uZ2V0VGltZSgpIC8gMTAwMDtcclxuICAgIHJldHVybiB7IHRpbWVzdGFtcHREYXRlRnJvbSwgdGltZXN0YW1wdERhdGVUbyB9O1xyXG4gIH1cclxuICBpZiAoY3VycmVudFF1YXRlciA9PT0gMykge1xyXG4gICAgbGV0IGRhdGVGcm9tID0gbmV3IERhdGUoYCR7Y3VycmVudERhdGUuZ2V0RnVsbFllYXIoKX0tMDctMDFgKTtcclxuICAgIGRhdGVGcm9tLnNldEhvdXJzKDIzKTtcclxuICAgIGRhdGVGcm9tLnNldE1pbnV0ZXMoNTkpO1xyXG4gICAgZGF0ZUZyb20uc2V0U2Vjb25kcyg1OSk7XHJcbiAgICBsZXQgdGltZXN0YW1wdERhdGVGcm9tID0gZGF0ZUZyb20uZ2V0VGltZSgpIC8gMTAwMDtcclxuICAgIGxldCBkYXRlVG8gPSBuZXcgRGF0ZShgJHtjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpfS0wOS0zMGApO1xyXG4gICAgZGF0ZVRvLnNldEhvdXJzKDIzKTtcclxuICAgIGRhdGVUby5zZXRNaW51dGVzKDU5KTtcclxuICAgIGRhdGVUby5zZXRTZWNvbmRzKDU5KTtcclxuICAgIGxldCB0aW1lc3RhbXB0RGF0ZVRvID0gZGF0ZVRvLmdldFRpbWUoKSAvIDEwMDA7XHJcbiAgICByZXR1cm4geyB0aW1lc3RhbXB0RGF0ZUZyb20sIHRpbWVzdGFtcHREYXRlVG8gfTtcclxuICB9XHJcbiAgaWYgKGN1cnJlbnRRdWF0ZXIgPT09IDQpIHtcclxuICAgIGxldCBkYXRlRnJvbSA9IG5ldyBEYXRlKGAke2N1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCl9LTEwLTAxYCk7XHJcbiAgICBkYXRlRnJvbS5zZXRIb3VycygyMyk7XHJcbiAgICBkYXRlRnJvbS5zZXRNaW51dGVzKDU5KTtcclxuICAgIGRhdGVGcm9tLnNldFNlY29uZHMoNTkpO1xyXG4gICAgbGV0IHRpbWVzdGFtcHREYXRlRnJvbSA9IGRhdGVGcm9tLmdldFRpbWUoKSAvIDEwMDA7XHJcbiAgICBsZXQgZGF0ZVRvID0gbmV3IERhdGUoYCR7Y3VycmVudERhdGUuZ2V0RnVsbFllYXIoKX0tMTItMzFgKTtcclxuICAgIGRhdGVUby5zZXRIb3VycygyMyk7XHJcbiAgICBkYXRlVG8uc2V0TWludXRlcyg1OSk7XHJcbiAgICBkYXRlVG8uc2V0U2Vjb25kcyg1OSk7XHJcbiAgICBsZXQgdGltZXN0YW1wdERhdGVUbyA9IGRhdGVUby5nZXRUaW1lKCkgLyAxMDAwO1xyXG4gICAgcmV0dXJuIHsgdGltZXN0YW1wdERhdGVGcm9tLCB0aW1lc3RhbXB0RGF0ZVRvIH07XHJcbiAgfVxyXG59XHJcbmxldCBnZXRUaW1lTW9udGhGcm9tO1xyXG5jb25zdCBoZWFkZXJGcm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItZnJvbVwiKTtcclxubGV0IHllYXJyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5sZXQgcGVyaW9kWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGVyaW9kWWVhclwiKTtcclxucGVyaW9kWWVhci5mb3JFYWNoKCh5ZWFyKSA9PiB7XHJcbiAgeWVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHllYXJyID0gZS50YXJnZXQuaW5uZXJIVE1MO1xyXG4gIH0pO1xyXG59KTtcclxuY29uc3QgcGVyaW9kUXVhcnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhcnRlclBlcmlvZFwiKTtcclxuXHJcbnBlcmlvZFF1YXJ0ZXIuZm9yRWFjaCgocXVhcnRlcikgPT4ge1xyXG4gIHF1YXJ0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50UXVhdGVyID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQubnVtYmVyKTtcclxuICAgIGZ1bmN0aW9uIHF1YXJ0ZXJQcmV2aW91cygpIHtcclxuICAgICAgaWYgKGN1cnJlbnRRdWF0ZXIgPT09IDEpIHtcclxuICAgICAgICBsZXQgZGF0ZUZyb20gPSBuZXcgRGF0ZShgJHt5ZWFycn0tMDEtMDFgKTtcclxuICAgICAgICBkYXRlRnJvbS5zZXRIb3VycygwKTtcclxuICAgICAgICBkYXRlRnJvbS5zZXRNaW51dGVzKDU5KTtcclxuICAgICAgICBkYXRlRnJvbS5zZXRTZWNvbmRzKDU5KTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVzdGFtcHREYXRlRnJvbSA9IGRhdGVGcm9tLmdldFRpbWUoKSAvIDEwMDA7XHJcblxyXG4gICAgICAgIGxldCBkYXRlVG8gPSBuZXcgRGF0ZShgJHt5ZWFycn0tMDMtMzFgKTtcclxuICAgICAgICBkYXRlVG8uc2V0SG91cnMoMjMpO1xyXG4gICAgICAgIGRhdGVUby5zZXRNaW51dGVzKDU5KTtcclxuICAgICAgICBkYXRlVG8uc2V0U2Vjb25kcyg1OSk7XHJcblxyXG4gICAgICAgIGxldCB0aW1lc3RhbXB0RGF0ZVRvID0gZGF0ZVRvLmdldFRpbWUoKSAvIDEwMDA7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHRpbWVzdGFtcHREYXRlRnJvbSwgdGltZXN0YW1wdERhdGVUbyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjdXJyZW50UXVhdGVyID09PSAyKSB7XHJcbiAgICAgICAgbGV0IGRhdGVGcm9tID0gbmV3IERhdGUoYCR7eWVhcnJ9LTA0LTAxYCk7XHJcbiAgICAgICAgZGF0ZUZyb20uc2V0SG91cnMoMCk7XHJcbiAgICAgICAgZGF0ZUZyb20uc2V0TWludXRlcygwKTtcclxuICAgICAgICBkYXRlRnJvbS5zZXRTZWNvbmRzKDApO1xyXG4gICAgICAgIGxldCB0aW1lc3RhbXB0RGF0ZUZyb20gPSBkYXRlRnJvbS5nZXRUaW1lKCkgLyAxMDAwO1xyXG4gICAgICAgIGxldCBkYXRlVG8gPSBuZXcgRGF0ZShgJHt5ZWFycn0tMDYtMzBgKTtcclxuICAgICAgICBkYXRlVG8uc2V0SG91cnMoMjMpO1xyXG4gICAgICAgIGRhdGVUby5zZXRNaW51dGVzKDU5KTtcclxuICAgICAgICBkYXRlVG8uc2V0U2Vjb25kcyg1OSk7XHJcbiAgICAgICAgbGV0IHRpbWVzdGFtcHREYXRlVG8gPSBkYXRlVG8uZ2V0VGltZSgpIC8gMTAwMDtcclxuICAgICAgICByZXR1cm4geyB0aW1lc3RhbXB0RGF0ZUZyb20sIHRpbWVzdGFtcHREYXRlVG8gfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY3VycmVudFF1YXRlciA9PT0gMykge1xyXG4gICAgICAgIGxldCBkYXRlRnJvbSA9IG5ldyBEYXRlKGAke3llYXJyfS0wNy0wMWApO1xyXG4gICAgICAgIGRhdGVGcm9tLnNldEhvdXJzKDApO1xyXG4gICAgICAgIGRhdGVGcm9tLnNldE1pbnV0ZXMoMCk7XHJcbiAgICAgICAgZGF0ZUZyb20uc2V0U2Vjb25kcygwKTtcclxuICAgICAgICBsZXQgdGltZXN0YW1wdERhdGVGcm9tID0gZGF0ZUZyb20uZ2V0VGltZSgpIC8gMTAwMDtcclxuICAgICAgICBsZXQgZGF0ZVRvID0gbmV3IERhdGUoYCR7eWVhcnJ9LTA5LTMwYCk7XHJcbiAgICAgICAgZGF0ZVRvLnNldEhvdXJzKDIzKTtcclxuICAgICAgICBkYXRlVG8uc2V0TWludXRlcyg1OSk7XHJcbiAgICAgICAgZGF0ZVRvLnNldFNlY29uZHMoNTkpO1xyXG4gICAgICAgIGxldCB0aW1lc3RhbXB0RGF0ZVRvID0gZGF0ZVRvLmdldFRpbWUoKSAvIDEwMDA7XHJcbiAgICAgICAgcmV0dXJuIHsgdGltZXN0YW1wdERhdGVGcm9tLCB0aW1lc3RhbXB0RGF0ZVRvIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGN1cnJlbnRRdWF0ZXIgPT09IDQpIHtcclxuICAgICAgICBsZXQgZGF0ZUZyb20gPSBuZXcgRGF0ZShgJHt5ZWFycn0tMTAtMDFgKTtcclxuICAgICAgICBkYXRlRnJvbS5zZXRIb3VycygwKTtcclxuICAgICAgICBkYXRlRnJvbS5zZXRNaW51dGVzKDApO1xyXG4gICAgICAgIGRhdGVGcm9tLnNldFNlY29uZHMoMCk7XHJcbiAgICAgICAgbGV0IHRpbWVzdGFtcHREYXRlRnJvbSA9IGRhdGVGcm9tLmdldFRpbWUoKSAvIDEwMDA7XHJcbiAgICAgICAgbGV0IGRhdGVUbyA9IG5ldyBEYXRlKGAke3llYXJyfS0xMi0zMWApO1xyXG4gICAgICAgIGRhdGVUby5zZXRIb3VycygyMyk7XHJcbiAgICAgICAgZGF0ZVRvLnNldE1pbnV0ZXMoNTkpO1xyXG4gICAgICAgIGRhdGVUby5zZXRTZWNvbmRzKDU5KTtcclxuICAgICAgICBsZXQgdGltZXN0YW1wdERhdGVUbyA9IGRhdGVUby5nZXRUaW1lKCkgLyAxMDAwO1xyXG4gICAgICAgIHJldHVybiB7IHRpbWVzdGFtcHREYXRlRnJvbSwgdGltZXN0YW1wdERhdGVUbyB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWFydGVyTnVtYiA9IGUudGFyZ2V0LmlubmVySFRNTDtcclxuICAgIGhlYWRlckZyb20uaW5uZXJIVE1MID0gYNCf0LXRgNC40L7QtDogJHtxdWFydGVyTnVtYn0g0LrQstCw0YDRgtCw0LsgJHt5ZWFycn0g0LPQvtC00LBgO1xyXG5cclxuICAgIHJlbmRlcih7XHJcbiAgICAgIGZyb206IHF1YXJ0ZXJQcmV2aW91cygpLnRpbWVzdGFtcHREYXRlRnJvbSxcclxuICAgICAgdG86IHF1YXJ0ZXJQcmV2aW91cygpLnRpbWVzdGFtcHREYXRlVG8sXHJcbiAgICAgIGN1cnJlbnRRdWF0ZXIsXHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcbmxldCBwZXJpb2ROaW5ldHlEYXlzID0gbmV3IERhdGUoKTtcclxucGVyaW9kTmluZXR5RGF5cy5zZXRIb3VycygwKTtcclxucGVyaW9kTmluZXR5RGF5cy5zZXRNaW51dGVzKDApO1xyXG5wZXJpb2ROaW5ldHlEYXlzLnNldFNlY29uZHMoMCk7XHJcbmZ1bmN0aW9uIHF1YXJ0ZXJDdXJyZW50KCkge1xyXG4gIC8vIGxldCByZXN1bHREYXRlID0gZGF0ZUZucy5zdWJEYXlzKHBlcmlvZE5pbmV0eURheXMsIDkwKTtcclxuICBjb25zdCByZXN1bHREYXRlID0gbmV3IERhdGUoXHJcbiAgICBuZXcgRGF0ZShwZXJpb2ROaW5ldHlEYXlzKS5nZXRUaW1lKCkgLSA5MCAqIDI0ICogNjAgKiA2MCAqIDEwMDBcclxuICApO1xyXG4gIGxldCB0aW1lc3RhbXB0RGF0ZUZyb20gPSBNYXRoLmZsb29yKHJlc3VsdERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgbGV0IHBlcmlvZE5pbmV0eURheUVuZCA9IG5ldyBEYXRlKCk7XHJcbiAgcGVyaW9kTmluZXR5RGF5RW5kLnNldEhvdXJzKDApO1xyXG4gIHBlcmlvZE5pbmV0eURheUVuZC5zZXRNaW51dGVzKDU5KTtcclxuICBwZXJpb2ROaW5ldHlEYXlFbmQuc2V0U2Vjb25kcyg1OSk7XHJcbiAgbGV0IHRpbWVzdGFtcHREYXRlVG8gPSBNYXRoLmZsb29yKHBlcmlvZE5pbmV0eURheUVuZC5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICByZXR1cm4geyB0aW1lc3RhbXB0RGF0ZUZyb20sIHRpbWVzdGFtcHREYXRlVG8gfTtcclxufVxyXG5cclxubGV0IGZpbHRlckRhdGVQYXJhbXMgPSB7XHJcbiAgZnJvbTogcXVhcnRlckN1cnJlbnQoKS50aW1lc3RhbXB0RGF0ZUZyb20sXHJcbiAgdG86IHF1YXJ0ZXJDdXJyZW50KCkudGltZXN0YW1wdERhdGVUbyxcclxufTtcclxubGV0IGZpbHRlckRhdGVQYXJhbXNzID0ge1xyXG4gIGZyb206IHF1YXJ0ZXJQcmV2aW91cygpLnRpbWVzdGFtcHREYXRlRnJvbSxcclxuICB0bzogcXVhcnRlclByZXZpb3VzKCkudGltZXN0YW1wdERhdGVUbyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRNYW5hZ2VycygpIHtcclxuICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcclxuICAgIHR5cGU6IFwibWFuYWdlcnNcIixcclxuICB9O1xyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vYW1hcmFudGEuaW0zMDAwLnJ1L2JvdC93aWRnZXQvbXkvdXNlcnNfanNvbi5waHBcIixcclxuICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgIGRhdGE6IHF1ZXJ5UGFyYW1zLFxyXG5cclxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLCAvLyBFeHBlY3RlZCByZXNwb25zZSBkYXRhIHR5cGVcclxuXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENvbXBhbmllcyhxdWVyeSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJRdWVyeSA9IHF1ZXJ5IHx8IGZpbHRlckRhdGVQYXJhbXM7XHJcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcclxuICAgICAgZmlsdGVyUXVlcnksXHJcbiAgICB9O1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogXCJodHRwczovL2FtYXJhbnRhLmltMzAwMC5ydS9ib3Qvd2lkZ2V0L215L2NvbXBhbmllc19qc29uLnBocFwiLFxyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgZGF0YTogZmlsdGVyUXVlcnksXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBmaWx0ZXJMZWFkc0J5TWFuYWdlcihsZWFkcywgbWFuYWdlcklkKSB7XHJcbiAgY29uc3QgZmlsdGVyZWREYXRhID0gbGVhZHMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlU3RyID0gaXRlbS5jcmVhdGVkX2F0O1xyXG4gICAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGVTdHIpO1xyXG4gICAgLy8gZGF0ZU9iai5zZXRIb3VycygwLCAwKTtcclxuICAgIGNvbnN0IG1vbnRoID0gKGRhdGVPYmouZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucmVwbGFjZSgvXjArLywgXCJcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZE1vbnRoUXVhcnRlcihkYXRlKSB7XHJcbiAgICAgIGxldCBmaW5kUXVhcnRlciA9IG1vbnRoc1dpdGhRdW90ZXJbZGF0ZV07XHJcbiAgICAgIHJldHVybiBmaW5kUXVhcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50UXVhdGVyID0gZmluZE1vbnRoUXVhcnRlcihtb250aCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgTnVtYmVyKGl0ZW0ucmVzcG9uc2libGVfaWQpID09PSBtYW5hZ2VySWRcclxuICAgICAgLy8gJiZcclxuICAgICAgLy9cclxuICAgICAgLy8gY3VycmVudFF1YXRlciA8PSBxdWVyeS5jdXJyZW50UXVhdGVyXHJcbiAgICAgIC8vIDIgPD0gMlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcclxufVxyXG5mdW5jdGlvbiBsb2FkTGVhZHMocXVlcnkpIHtcclxuICBjb25zdCBmaWx0ZXJRdWVyeSA9IHF1ZXJ5IHx8IGZpbHRlckRhdGVQYXJhbXM7XHJcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICB0eXBlOiBcImZpbHRlcl9sZWFkc1wiLFxyXG4gICAgZGF0YTogZmlsdGVyUXVlcnksXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogXCJodHRwczovL2FtYXJhbnRhLmltMzAwMC5ydS9ib3Qvd2lkZ2V0L1wiLFxyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuXHJcbiAgICAgIGRhdGE6IHF1ZXJ5UGFyYW1zLFxyXG5cclxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLCAvLyBFeHBlY3RlZCByZXNwb25zZSBkYXRhIHR5cGVcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZpbHRlckxlYWRzKGxlYWRzcywgbWFuYWdlcklkKSB7XHJcbiAgY29uc3QgZmlsdGVyZWREYXRhTGVhZHNDb21wYW55ID0gbGVhZHNzLmZpbHRlcihcclxuICAgIChpdGVtKSA9PiBOdW1iZXIoaXRlbS5jb21wYW55X3Jlc3BvbnNpYmxlX2lkKSA9PSBtYW5hZ2VySWRcclxuICApO1xyXG5cclxuICByZXR1cm4gZmlsdGVyZWREYXRhTGVhZHNDb21wYW55O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTGVhZHNDb21wbGV0ZShxdWVyeSkge1xyXG4gIGNvbnN0IGZpbHRlclF1ZXJ5ID0gcXVlcnkgfHwgZmlsdGVyRGF0ZVBhcmFtc3M7XHJcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICB0eXBlOiBcImZpbHRlcl9jb21wbGV0ZV9sZWFkc1wiLFxyXG4gICAgZGF0YTogZmlsdGVyUXVlcnksXHJcbiAgfTtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vYW1hcmFudGEuaW0zMDAwLnJ1L2JvdC93aWRnZXQvXCIsXHJcbiAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICBkYXRhOiBxdWVyeVBhcmFtcyxcclxuXHJcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIiwgLy8gRXhwZWN0ZWQgcmVzcG9uc2UgZGF0YSB0eXBlXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBmaWx0ZXJMZWFkc0NvbXBsZXRlKGxlYWRzcywgbWFuYWdlcklkKSB7XHJcbiAgY29uc3QgZmlsdGVyZWREYXRhTGVhZHNDb21wbGV0ZSA9IGxlYWRzcy5maWx0ZXIoXHJcbiAgICAoaXRlbSkgPT4gTnVtYmVyKGl0ZW0ubGVhZF9yZXNwb25zaWJsZV9pZCkgPT0gbWFuYWdlcklkXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGZpbHRlcmVkRGF0YUxlYWRzQ29tcGxldGU7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyTWFuYWdlcnMobWFuYWdlcnNBcnIpIHtcclxuICBjb25zdCBmcmFnbWVudCA9ICQoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKTtcclxuICBjb25zdCB0YWJsZUVsID0gJChcIi5qcy10Ym9keVwiKTtcclxuICBsZXQgbnVtID0gMDtcclxuICBtYW5hZ2Vyc0Fyci5mb3JFYWNoKChtYW5hZ2VyLCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IHRvdGFsU3VtbSA9IDA7XHJcbiAgICBsZXQgdG90YWxTdW1tRm9ybWF0dGVkO1xyXG4gICAgY29uc3QgYWxsTGVhZHNDb3VudCA9IG1hbmFnZXIuYWxsTWFuYWdlckxlYWRzLmxlbmd0aDtcclxuICAgIGNvbnN0IHBlcmNlbnRPZkNvbXBsZXRlZExlYWRzID0gYWxsTGVhZHNDb3VudFxyXG4gICAgICA/IE1hdGgucm91bmQoKG1hbmFnZXIubGVhZENvdW50ICogMTAwKSAvIGFsbExlYWRzQ291bnQpXHJcbiAgICAgIDogMDtcclxuXHJcbiAgICBjb25zdCAkcm93ID0gJChcIjx0cj5cIik7XHJcbiAgICBjb25zdCAkaW5kZXggPSAkKFwiPHRkPlwiKS50ZXh0KChudW0gPSBudW0gKyAxKSk7XHJcbiAgICBjb25zdCAkbmFtZSA9ICQoXCI8dGQ+XCIpLnRleHQobWFuYWdlci5uYW1lKTtcclxuICAgIGNvbnN0ICRwZXJjZW50QWN0aXZlTGVhZHMgPSAkKFwiPHRkPlwiKS50ZXh0KHBlcmNlbnRPZkNvbXBsZXRlZExlYWRzICsgXCIlXCIpO1xyXG4gICAgJHBlcmNlbnRBY3RpdmVMZWFkcy5hZGRDbGFzcyhcImpzLUNlbnRlclwiKTtcclxuICAgIG1hbmFnZXIubGVhZHNGaWx0ZXJDb21wcGxldGVkLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgdG90YWxTdW1tICs9IE51bWJlcihpdGVtLmxlYWRfc3VtKTtcclxuXHJcbiAgICAgIHRvdGFsU3VtbUZvcm1hdHRlZCA9IHRvdGFsU3VtbS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodG90YWxTdW1tIDwgMCkge1xyXG4gICAgICB0b3RhbFN1bW1Gb3JtYXR0ZWQgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG90YWxTdW1tRm9ybWF0dGVkID0gdG90YWxTdW1tLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCAkUXVhcnRlcmx5Qm9udXNBbW91bnQgPSAkKFwiPHRkPlwiKS50ZXh0KFxyXG4gICAgICBgJHtwZXJjZW50T2ZDb21wbGV0ZWRMZWFkcyAvIDEwfSVgXHJcbiAgICApO1xyXG4gICAgJFF1YXJ0ZXJseUJvbnVzQW1vdW50LmFkZENsYXNzKFwianMtQ2VudGVyXCIpO1xyXG4gICAgY29uc3QgJHN1bW0gPSAkKFwiPHRkPlwiKS50ZXh0KHRvdGFsU3VtbUZvcm1hdHRlZCk7XHJcbiAgICBmdW5jdGlvbiBib251c1F1YXJ0ZXIoKSB7XHJcbiAgICAgIGNvbnN0IFBlcmNlbnQgPSAkKFwiPHRkPlwiKS50ZXh0KFxyXG4gICAgICAgIE1hdGgucm91bmQoXHJcbiAgICAgICAgICAodG90YWxTdW1tIC8gMTAwKSAqIChwZXJjZW50T2ZDb21wbGV0ZWRMZWFkcyAvIDEwKVxyXG4gICAgICAgICkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gUGVyY2VudDtcclxuICAgIH1cclxuXHJcbiAgICAkcm93XHJcbiAgICAgIC5hcHBlbmQoJGluZGV4KVxyXG4gICAgICAuYXBwZW5kKCRuYW1lKVxyXG4gICAgICAvLyAuYXBwZW5kKHRvdGFsU3VtbUZvcm1hdHRlZClcclxuICAgICAgLmFwcGVuZCgkcGVyY2VudEFjdGl2ZUxlYWRzKVxyXG4gICAgICAuYXBwZW5kKCRRdWFydGVybHlCb251c0Ftb3VudClcclxuICAgICAgLmFwcGVuZCgkc3VtbSlcclxuICAgICAgLmFwcGVuZChib251c1F1YXJ0ZXIoKSk7XHJcbiAgICBmcmFnbWVudC5hcHBlbmQoJHJvdyk7XHJcbiAgfSk7XHJcbiAgdGFibGVFbC5lbXB0eSgpO1xyXG4gIHRhYmxlRWwuYXBwZW5kKGZyYWdtZW50KTtcclxufVxyXG5mdW5jdGlvbiBmaWx0ZXJMZWFkczIobGVhZHNzLCBhbW9faWQpIHtcclxuICBjb25zdCBmaWx0ZXJlZERhdGFzID0gbGVhZHNzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hbW9fY29tcGFueV9pZCA9PSBhbW9faWQpO1xyXG5cclxuICByZXR1cm4gZmlsdGVyZWREYXRhcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyKHF1ZXJ5KSB7XHJcbiAgY29uc3QgbWFuYWdlcnMgPSBhd2FpdCBsb2FkTWFuYWdlcnMoKTtcclxuICAvLyAxLiDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LLRgdC1INC70LjQtNGLXHJcbiAgY29uc3QgYWxsQ29tcGFuaWVzID0gYXdhaXQgbG9hZENvbXBhbmllcyhxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGxlYWRzID0gYXdhaXQgbG9hZExlYWRzKHF1ZXJ5KTtcclxuICBjb25zdCBsZWFkc0NvbXBsZXRlZCA9IGF3YWl0IGxvYWRMZWFkc0NvbXBsZXRlKHF1ZXJ5KTtcclxuICBjb25zdCBhbGxMZWFkc1dpdGhDb21wYW5pZXMgPSBhbGxDb21wYW5pZXMubWFwKChjb21wYW55KSA9PiB7XHJcbiAgICBjb25zdCBjb21wYW55TGVhZHMgPSBmaWx0ZXJMZWFkczIobGVhZHMsIGNvbXBhbnkuYW1vX2lkKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5jb21wYW55LFxyXG4gICAgICBjb21wYW55TGVhZHMsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuZXdNYW5hZ2VyTGlzdFdpdGhMZWFkcyA9IG1hbmFnZXJzLm1hcChhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgLy8g0L7RgtGE0LjQu9GM0YLQvtC70LLQsNGC0Ywg0LvQuNC00Ysg0L/QviDQvNC10L3QtdC00LbQtdGA0YNcclxuICAgIGNvbnN0IGFsbE1hbmFnZXJMZWFkcyA9IGZpbHRlckxlYWRzQnlNYW5hZ2VyKGFsbENvbXBhbmllcywgaXRlbS5pZCwgcXVlcnkpO1xyXG4gICAgY29uc3QgbGVhZHNGaWx0ZXJDb21wYW55ID0gZmlsdGVyTGVhZHMobGVhZHMsIGl0ZW0uaWQpO1xyXG5cclxuICAgIGNvbnN0IGxlYWRzRmlsdGVyQ29tcHBsZXRlZCA9IGZpbHRlckxlYWRzQ29tcGxldGUobGVhZHNDb21wbGV0ZWQsIGl0ZW0uaWQpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRDb21wYW5pZXNCeU1hbmFnZXIgPSBhbGxMZWFkc1dpdGhDb21wYW5pZXMuZmlsdGVyKFxyXG4gICAgICAoY29tcGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBjb21wYW55LmNvbXBhbnlMZWFkcy5sZW5ndGggPiAwICYmIGNvbXBhbnkucmVzcG9uc2libGVfaWQgPT0gaXRlbS5pZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbGVhZENvdW50ID0gZmlsdGVyZWRDb21wYW5pZXNCeU1hbmFnZXIucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuICAgICAgaWYgKGN1cnIucmVzcG9uc2libGVfaWQgPT0gaXRlbS5pZCkge1xyXG4gICAgICAgIGFjYyA9IGFjYyArIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCAwKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLml0ZW0sXHJcbiAgICAgIC8qbGVhZHMsKi8gLypsZWFkc0NvbXBsZXRlZCwqLyBhbGxNYW5hZ2VyTGVhZHMsXHJcbiAgICAgIGxlYWRzRmlsdGVyQ29tcGFueSxcclxuICAgICAgbGVhZENvdW50LFxyXG4gICAgICBsZWFkc0ZpbHRlckNvbXBwbGV0ZWQsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKG5ld01hbmFnZXJMaXN0V2l0aExlYWRzKTtcclxuXHJcbiAgcmVuZGVyTWFuYWdlcnMocmVzdWx0KTtcclxuICBjb25zdCBjZW50ZXJTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtQ2VudGVyXCIpO1xyXG5cclxuICBjZW50ZXJTdHlsZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgfSk7XHJcbn1cclxucmVuZGVyKHtcclxuICBmcm9tOiBxdWFydGVyQ3VycmVudCgpLnRpbWVzdGFtcHREYXRlRnJvbSxcclxuICB0bzogcXVhcnRlckN1cnJlbnQoKS50aW1lc3RhbXB0RGF0ZVRvLFxyXG5cclxuICBjdXJyZW50UXVhdGVyLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9