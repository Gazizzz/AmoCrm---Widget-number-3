import * as dateFns from "date-fns";

let resultUrl2 = window.location.href;

const url = new URL(resultUrl2);
let strDatefrom = url.searchParams.get("date_from");
let strDateto = url.searchParams.get("date_to");

const period = url.searchParams.get("period");
let today = new Date();

function PeriodDay() {
  if (period === "day") {
    strDatefrom = today;
    strDateto = today;
    return [strDatefrom, strDateto];
  }
}

function Yesterday() {
  if (period === "yesterday") {
    strDatefrom = dateFns.sub(today, { days: 1 });
    strDateto = strDatefrom;
    return [strDatefrom, strDateto];
  }
}
function StartEndWeek() {
  if (period === "week") {
    const startEndWeekUS = dateFns.startOfWeek(today);
    strDatefrom = dateFns.add(startEndWeekUS, { days: 1 });
    const lastDayWeekUS = dateFns.lastDayOfWeek(today);
    strDateto = dateFns.add(lastDayWeekUS, { days: 1 });
    return [strDatefrom, strDateto];
  }
}

function Month() {
  if (period === "month") {
    const lastDayMonth = dateFns.lastDayOfMonth(today);
    const firstDayMonth = dateFns.startOfMonth(today);
    strDatefrom = firstDayMonth;
    strDateto = lastDayMonth;
    return [strDatefrom, strDateto];
  }
}
export { PeriodDay, Yesterday, StartEndWeek, Month };
