import { Month, nextMonth, previousMonth } from "./month";

describe("previousMonth", () => {
  it("should return previous", () => {
    expect(previousMonth(Month.APRIL)).toBe(Month.MARCH);
  });

  it("should return DECEMBER for JANUARY", () => {
    expect(previousMonth(Month.JANUARY)).toBe(Month.DECEMBER);
  });
});

describe("nextMonth", () => {
  it("should return next", () => {
    expect(nextMonth(Month.FEBRUARY)).toBe(Month.MARCH);
  });

  it("should return JANUARY for DECEMBER", () => {
    expect(nextMonth(Month.DECEMBER)).toBe(Month.JANUARY);
  });
});
