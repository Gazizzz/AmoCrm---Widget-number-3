import * as dateFns from "date-fns";
import "./style.css";
import {
  periodDay,
  yesterday,
  startEndWeek,
  month,
  strDatefrom,
  strDateto,
  url,
} from "./helpers.js";

// что подаем на вход:
//  arrDatefrom;
// что возвращаем  - return quarter

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
const formattedDate = dateFns.format(date, "dd.MM.yyyy");
console.log(formattedDate);
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
console.log(currentQuater);
function quarterPrevious() {
  if (currentQuater === 1) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-01-01`);
    let timestamptDateFrom = dateFrom.getTime() / 1000;
    console.log(timestamptDateFrom);
    let dateTo = new Date(`${currentDate.getFullYear()}-03-31`);

    let timestamptDateTo = dateTo.getTime() / 1000;

    return { timestamptDateFrom, timestamptDateTo };
  }
  if (currentQuater === 2) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-04-01`);
    let timestamptDateFrom = dateFrom.getTime() / 1000;
    let dateTo = new Date(`${currentDate.getFullYear()}-06-30`);
    let timestamptDateTo = dateTo.getTime() / 1000;
    return { timestamptDateFrom, timestamptDateTo };
  }
  if (currentQuater === 3) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-07-01`);
    let timestamptDateFrom = dateFrom.getTime() / 1000;
    let dateTo = new Date(`${currentDate.getFullYear()}-09-30`);
    let timestamptDateTo = dateTo.getTime() / 1000;
    return { timestamptDateFrom, timestamptDateTo };
  }
  if (currentQuater === 4) {
    let dateFrom = new Date(`${currentDate.getFullYear()}-10-01`);
    let timestamptDateFrom = dateFrom.getTime() / 1000;
    let dateTo = new Date(`${currentDate.getFullYear()}-12-31`);
    let timestamptDateTo = dateTo.getTime() / 1000;
    return { timestamptDateFrom, timestamptDateTo };
  }
}
// let getTimeMonthFrom;
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
        console.log(dateFrom);
        // let test = dateFns.setMonth(new Date(), monthNumber);
        let timestamptDateFrom = dateFrom.getTime() / 1000;
        console.log(timestamptDateFrom);
        let dateTo = new Date(`${yearr}-03-31`);

        let timestamptDateTo = dateTo.getTime() / 1000;

        return { timestamptDateFrom, timestamptDateTo };
      }
      if (currentQuater === 2) {
        let dateFrom = new Date(`${yearr}-04-01`);
        let timestamptDateFrom = dateFrom.getTime() / 1000;
        let dateTo = new Date(`${yearr}-06-30`);
        let timestamptDateTo = dateTo.getTime() / 1000;
        return { timestamptDateFrom, timestamptDateTo };
      }
      if (currentQuater === 3) {
        let dateFrom = new Date(`${yearr}-07-01`);
        let timestamptDateFrom = dateFrom.getTime() / 1000;
        let dateTo = new Date(`${yearr}-09-30`);
        let timestamptDateTo = dateTo.getTime() / 1000;
        return { timestamptDateFrom, timestamptDateTo };
      }
      if (currentQuater === 4) {
        let dateFrom = new Date(`${yearr}-10-01`);
        let timestamptDateFrom = dateFrom.getTime() / 1000;
        let dateTo = new Date(`${yearr}-12-31`);
        let timestamptDateTo = dateTo.getTime() / 1000;
        return { timestamptDateFrom, timestamptDateTo };
      }
    }
    const quarterNumb = e.target.innerHTML;
    headerFrom.innerHTML = `Период: ${quarterNumb} квартал ${yearr} года`;
    render({
      from: quarterPrevious().timestamptDateFrom,
      to: quarterPrevious().timestamptDateTo,
    });
  });
});

let filterDateParams = {
  from: quarterPrevious().timestamptDateFrom,
  to: quarterPrevious().timestamptDateTo,
};

function loadManagers() {
  const queryParams = {
    type: "managers",
  };

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
function loadCompanies() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://app.aaccent.su/jenyanour/my/companies_json.php",
      method: "get",
      dataType: "json",
      data: {},
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
  const filteredData = leads.filter(
    (item) => Number(item.responsible_id) === managerId
  );

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
function filterLeads(leadss, managerId) {
  const filteredDataLeadsCompany = leadss.filter(
    (item) => Number(item.company_responsible_id) == managerId
  );

  return filteredDataLeadsCompany;
}

function loadLeadsComplete(query) {
  const filterQuery = query || filterDateParams;
  const queryParams = {
    type: "filter_complete_leads",
    data: filterQuery,
  };
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
function filterLeadsComplete(leadss, managerId) {
  const filteredDataLeadsComplete = leadss.filter(
    (item) => Number(item.company_responsible_id) == managerId
  );

  return filteredDataLeadsComplete;
}
function renderManagers(managersArr) {
  const fragment = $(document.createDocumentFragment());
  const tableEl = $(".js-tbody");
  let num = 0;
  managersArr.forEach((manager, index) => {
    if (
      manager.name == "Евгения Ф. 8(909)886-75-17 (Кредитный специалист)" ||
      manager.name == "Мариам А. 8(918)916-96-50 (Кредитный специалист)"
    ) {
      let totalSumm = 0;
      let totalSummFormatted;
      const allLeadsCount = manager.allManagerLeads.length;
      const percentOfCompletedLeads = allLeadsCount
        ? Math.round((manager.leadCount * 100) / allLeadsCount)
        : 0;
      console.log(percentOfCompletedLeads);
      const $row = $("<tr>");
      const $index = $("<td>").text((num = num + 1));
      const $name = $("<td>").text(manager.name);
      const $percentActiveLeads = $("<td>").text(percentOfCompletedLeads + "%");
      manager.leadsFilterComppleted.map((item, index) => {
        totalSumm += Number(item.lead_sum);
        console.log(totalSumm);
        totalSummFormatted = totalSumm.toLocaleString("en-US");
      });

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
        .append($summ)
        .append(bonusQuarter());
      fragment.append($row);
    }
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
  const allCompanies = await loadCompanies();

  const leads = await loadLeads(query);
  const leadsCompleted = await loadLeadsComplete(query);
  const allLeadsWithCompanies = allCompanies.map((company) => {
    const companyLeads = filterLeads2(leads, company.amo_id);

    return {
      ...company,
      companyLeads,
    };
  });

  const firstManager = "9206253";
  const secondManage = "6889038";
  const newManagerListWithLeads = managers.map(async (item) => {
    // отфильтолвать лиды по менеджеру
    const allManagerLeads = filterLeadsByManager(allCompanies, item.id);

    const leadsFilterCompany = filterLeads(leads, item.id);

    const leadsFilterComppleted = filterLeadsComplete(leadsCompleted, item.id);
    const filteredCompaniesByManager = allLeadsWithCompanies.filter(
      (company) => {
        return (
          company.companyLeads.length > 0 &&
          (company.responsible_id == firstManager ||
            company.responsible_id == secondManage)
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

  console.log(result);
  renderManagers(result);
}
render();
