import dayjs from "dayjs";
/**
 * Checks if a date range is available for booking.
 *
 * @param {Dayjs} start - The start date of the date range.
 * @param {Dayjs} end - The end date of the date range.
 * @param {Array} bookings - An array of booking objects to check against.
 * @returns {boolean} - `true` if the date range is available, `false` otherwise.
 */

export const checkDateRangeAvailability = (start, end, bookings) => {
  return !bookings.some((booking) => {
    const bookingStartDate = dayjs(booking.dateFrom);
    const bookingEndDate = dayjs(booking.dateTo);
    return start.isBefore(bookingEndDate) && end.isAfter(bookingStartDate);
  });
};
