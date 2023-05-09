import * as dateFns from "date-fns";

const url = new URL(window.location.href);
let strDatefrom = url.searchParams.get("date_from");
let strDateto = url.searchParams.get("date_to");

let today = new Date();

function periodDay() {
  strDatefrom = today;
  strDateto = today;
  let timeFrom = today;
  let timeTo = today;
  let timeFromTimestamp = strDatefrom.getTime();
  let timeToTimestamp = strDateto.getTime();

  return {
    timeTo,
    timeFrom,
    timeFromTimestamp,
    timeToTimestamp,
  };
}

function yesterday() {
  strDatefrom = dateFns.sub(today, { days: 1 });
  strDateto = strDatefrom;
  let yesterdayFrom = strDatefrom;
  let yesterdayTo = yesterdayFrom;
  let yesterdayFromTimestamp = strDatefrom.getTime();
  let yesterdayToTimestamp = strDateto.getTime();
  return {
    yesterdayFromTimestamp,
    yesterdayToTimestamp,
    yesterdayFrom,
    yesterdayTo,
  };
}
function startEndWeek() {
  const startEndWeekUS = dateFns.startOfWeek(today);
  strDatefrom = dateFns.add(startEndWeekUS, { days: 1 });
  const lastDayWeekUS = dateFns.lastDayOfWeek(today);
  strDateto = dateFns.add(lastDayWeekUS, { days: 1 });
  let startEndWeekFrom = strDatefrom;
  let startEndWeekTo = strDateto;
  let timestampweekFrom = strDatefrom.getTime();
  let timestampWeekTo = strDateto.getTime();
  return {
    startEndWeekTo,
    startEndWeekFrom,
    timestampweekFrom,
    timestampWeekTo,
  };
}

function month() {
  const lastDayMonth = dateFns.lastDayOfMonth(today);
  const firstDayMonth = dateFns.startOfMonth(today);
  strDatefrom = firstDayMonth;
  strDateto = lastDayMonth;
  let monthFrom = strDatefrom;
  let monthTo = strDateto;
  let timestampMonthFrom = strDatefrom.getTime();
  let timestampMonthTo = strDateto.getTime();
  return { timestampMonthFrom, timestampMonthTo, monthFrom, monthTo };
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
