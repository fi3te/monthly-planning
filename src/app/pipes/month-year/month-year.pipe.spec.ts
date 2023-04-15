import { Month } from '../../models/month';
import { MonthYearPipe } from './month-year.pipe';

describe('MonthYearPipe', () => {

  let pipe: MonthYearPipe;

  beforeEach(() => {
    pipe = new MonthYearPipe();
  });

  it('should transform', () => {
    expect(pipe.transform({ month: Month.FEBRUARY, year: 2023 })).toBe("02 / 2023");
  })
});
