// constants.ts

import {DayOfWeek} from "../../typings";

export const DAYS_OF_WEEK: DayOfWeek[] = [
  {value: 0, label: "Sun"},
  {value: 1, label: "Mon"},
  {value: 2, label: "Tue"},
  {value: 3, label: "Wed"},
  {value: 4, label: "Thu"},
  {value: 5, label: "Fri"},
  {value: 6, label: "Sat"},
];

export const formatDays = (days: number[]): string => {
  const dayLabels = days.map(
    (day) => DAYS_OF_WEEK.find((d) => d.value === day)?.label
  );
  if (days.length === 7) return "Every day";
  if (days.length === 5 && days.every((d) => d >= 1 && d <= 5))
    return "Weekdays";
  if (days.length === 2 && days.includes(0) && days.includes(6))
    return "Weekends";
  return dayLabels.join(", ");
};
