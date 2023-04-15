import { Month, nextMonth, previousMonth } from "./month";

export interface MonthYear {
  month: Month;
  year: number;
}

export function createMonthYear(date: Date): MonthYear {
  return {
    month: date.getMonth() + 1,
    year: date.getFullYear()
  };
}

export function previousMonthYear(monthYear: MonthYear): MonthYear {
  const month = previousMonth(monthYear.month);
  const year = monthYear.year - (month === Month.DECEMBER ? 1 : 0);
  return { month, year };
}

export function nextMonthYear(monthYear: MonthYear): MonthYear {
  const month = nextMonth(monthYear.month);
  const year = monthYear.year + (month === Month.JANUARY ? 1 : 0);
  return { month, year };
}
