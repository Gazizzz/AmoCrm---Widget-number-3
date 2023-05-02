import * as dateFns from "date-fns";

const url = new URL(window.location.href);
let strDatefrom = url.searchParams.get("date_from");
let strDateto = url.searchParams.get("date_to");

let today = new Date();

function periodDay() {
  strDatefrom = today;
  strDateto = today;
  return [strDatefrom, strDateto];
}

function yesterday() {
  strDatefrom = dateFns.sub(today, { days: 1 });
  strDateto = strDatefrom;
  return [strDatefrom, strDateto];
}
function startEndWeek() {
  const startEndWeekUS = dateFns.startOfWeek(today);
  strDatefrom = dateFns.add(startEndWeekUS, { days: 1 });
  const lastDayWeekUS = dateFns.lastDayOfWeek(today);
  strDateto = dateFns.add(lastDayWeekUS, { days: 1 });
  return [strDatefrom, strDateto];
}

function month() {
  const lastDayMonth = dateFns.lastDayOfMonth(today);
  const firstDayMonth = dateFns.startOfMonth(today);
  strDatefrom = firstDayMonth;
  strDateto = lastDayMonth;
  return [strDatefrom, strDateto];
}
export {
  periodDay,
  yesterday,
  startEndWeek,
  month,
  strDatefrom,
  strDateto,
  url,
};
