import { checkDateRangeAvailability } from "./checkDateRangeAvailability";
import dayjs from "dayjs";
import { describe, it, expect } from "vitest";


describe("checkDateRangeAvailability", () => {
    const bookings = [
      { dateFrom: "2023-06-01", dateTo: "2023-06-05" },
      { dateFrom: "2023-06-10", dateTo: "2023-06-15" },
      { dateFrom: "2023-06-20", dateTo: "2023-06-25" },
    ];
  
    it("should return true if the date range is available", () => {
      const start = dayjs("2023-07-01");
      const end = dayjs("2023-07-05");
  
      const result = checkDateRangeAvailability(start, end, bookings);
  
      expect(result).toBe(true);
    });
  
    it("should return false if the date range overlaps with an existing booking", () => {
      const start = dayjs("2023-06-03");
      const end = dayjs("2023-06-08");
  
      const result = checkDateRangeAvailability(start, end, bookings);
  
      expect(result).toBe(false);
    });
  
    it("should return false if the date range is within an existing booking", () => {
      const start = dayjs("2023-06-12");
      const end = dayjs("2023-06-13");
  
      const result = checkDateRangeAvailability(start, end, bookings);
  
      expect(result).toBe(false);
    });
  });