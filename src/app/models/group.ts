import { formatMonth } from "./month";
import { MonthYear } from "./month-year";

export interface Group {
  date: MonthYear;
  entries: string[];
}

export function groupId(group: Group): string {
  return `group-${group.date.year}-${formatMonth(group.date.month)}`;
}
