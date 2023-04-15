export enum Month {
  JANUARY = 1,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER
}

export function previousMonth(month: Month): Month {
  return month === Month.JANUARY ? Month.DECEMBER : month - 1;
}

export function nextMonth(month: Month): Month {
  return month === Month.DECEMBER ? Month.JANUARY : month + 1;
}

export function formatMonth(month: Month): string {
  return `${month}`.padStart(2, "0");
}
