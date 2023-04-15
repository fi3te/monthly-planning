import { groupId } from "./group";
import { Month } from "./month";

describe("groupId", () => {
  it("should return id with leading zero for month", () => {
    expect(groupId({date: { month: Month.APRIL, year: 2023 }, entries: []}))
      .toBe("group-2023-04");
  });

  it("should return id without leading zero for month", () => {
    expect(groupId({date: { month: Month.OCTOBER, year: 2023 }, entries: []}))
      .toBe("group-2023-10");
  });
});
