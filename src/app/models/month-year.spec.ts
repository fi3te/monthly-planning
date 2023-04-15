import { Month } from "./month";
import { createMonthYear, nextMonthYear, previousMonthYear } from "./month-year";

describe("createMonthYear", () => {
  it("should create", () => {
    const date = new Date(1673740800000);
    expect(createMonthYear(date))
      .toEqual({ month: Month.JANUARY, year: 2023 });
  });
})

describe("previousMonthYear", () => {
  it("should return previous", () => {
    expect(previousMonthYear({ month: Month.APRIL, year: 2023 }))
      .toEqual({ month: Month.MARCH, year: 2023 });
  });

  it("should return previous for first month of a year", () => {
    expect(previousMonthYear({ month: Month.JANUARY, year: 2023 }))
      .toEqual({ month: Month.DECEMBER, year: 2022 });
  });
});

describe("nextMonthYear", () => {
  it("should return next", () => {
    expect(nextMonthYear({ month: Month.APRIL, year: 2023 }))
      .toEqual({ month: Month.MAY, year: 2023 });
  });

  it("should return next for last month of a year", () => {
    expect(nextMonthYear({ month: Month.DECEMBER, year: 2023 }))
      .toEqual({ month: Month.JANUARY, year: 2024 });
  });
});
