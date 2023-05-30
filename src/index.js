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

let date = new Date();
const formattedDate = dateFns.format(date, "dd.MM.yyyy");

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
  if (currentQuater > 1) {
    let previousQuarter = currentQuater - 1;
    console.log(previousQuarter);
    if (previousQuarter === 1) {
      let dateFrom = new Date(`${currentDate.getFullYear()}-01-01`);
      let timestamptDateFrom = dateFrom.getTime() / 1000;
      console.log(timestamptDateFrom);
      let dateTo = new Date(`${currentDate.getFullYear()}-03-31`);

      let timestamptDateTo = dateTo.getTime() / 1000;

      return { timestamptDateFrom, timestamptDateTo };
    }
    if (previousQuarter === 2) {
      let dateFrom = new Date(`${currentDate.getFullYear()}-04-01`);
      let timestamptDateFrom = dateFrom.getTime() / 1000;
      let dateTo = new Date(`${currentDate.getFullYear()}-06-30`);
      let timestamptDateTo = dateTo.getTime() / 1000;
      return { timestamptDateFrom, timestamptDateTo };
    }
    if (previousQuarter === 3) {
      let dateFrom = new Date(`${currentDate.getFullYear()}-07-01`);
      let timestamptDateFrom = dateFrom.getTime() / 1000;
      let dateTo = new Date(`${currentDate.getFullYear()}-09-30`);
      let timestamptDateTo = dateTo.getTime() / 1000;
      return { timestamptDateFrom, timestamptDateTo };
    }
    if (previousQuarter === 4) {
      let dateFrom = new Date(`${currentDate.getFullYear()}-10-01`);
      let timestamptDateFrom = dateFrom.getTime() / 1000;
      let dateTo = new Date(`${currentDate.getFullYear()}-12-31`);
      let timestamptDateTo = dateTo.getTime() / 1000;
      return { timestamptDateFrom, timestamptDateTo };
    }
  }
}

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
function loadLeads(managerId) {
  const queryParams = {
    type: "filter_leads",
    data: filterDateParams,
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

function loadLeadsComplete(managerId) {
  const queryParams = {
    type: "filter_complete_leads",
    data: filterDateParams,
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
      let test222;
      const $summ = $("<td>").text(totalSummFormatted);
      function bonusQuarter() {
        const Percent = $("<td>").text(
          Math.round(
            (totalSumm / 100) * (percentOfCompletedLeads / 10)
          ).toLocaleString("en-US")
        );
        return Percent;
        // if (percentOfCompletedLeads <= 9) {
        //   return $("<td>").text(0);
        // }
        // if (percentOfCompletedLeads >= 10 && percentOfCompletedLeads <= 26) {
        //   const tenPercent = $("<td>").text(
        //     Math.round((totalSumm / 100) * 1).toLocaleString("en-US")
        //   );
        //   return tenPercent;
        // }
        // if (percentOfCompletedLeads >= 27 && percentOfCompletedLeads <= 99) {
        //   const twentySevenPrecent = $("<td>").text(
        //     Math.round((totalSumm / 100) * 2.7).toLocaleString("en-US")
        //   );
        //   return twentySevenPrecent;
        // }
        // if (percentOfCompletedLeads >= 100) {
        //   const twentySevenPrecent = $("<td>").text(
        //     Math.round((totalSumm / 100) * 10).toLocaleString("en-US")
        //   );
        //   return twentySevenPrecent;
        // }
      }

      $row
        .append($index)
        .append($name)
        // .append($percentActiveLeads)
        // .append($summ)
        .append(bonusQuarter());
      fragment.append($row);
    }
  });
  $("table tbody").append(fragment);
}
function filterLeads2(leadss, amo_id) {
  const filteredDatas = leadss.filter((item) => item.amo_company_id == amo_id);

  return filteredDatas;
}

async function render() {
  const managers = await loadManagers();
  // 1. загрузить все лиды
  const allCompanies = await loadCompanies();
  const leads = await loadLeads();
  const leadsCompleted = await loadLeadsComplete();
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
