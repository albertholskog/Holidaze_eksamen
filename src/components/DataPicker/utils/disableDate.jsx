import dayjs from "dayjs";

/**
 * Checks if a specific day should be disabled based on the given bookings and selected start date.
 *
 * @param {dayjs.Dayjs} day - The day to be checked.
 * @param {Array} bookings - The array of bookings.
 * @param {dayjs.Dayjs} dateStart - The selected start date.
 * @returns {boolean} - Returns true if the day should be disabled, otherwise false.
 */

export const disableDate = (day, bookings, dateStart) => {
  if (day.isBefore(dayjs(), "day")) {
    return true;
  }

  if (dateStart && day.isBefore(dateStart, "day")) {
    return true;
  }

  if (bookings) {
    return bookings.some((booking) => {
      const bookingStartDate = dayjs(booking.dateFrom);
      const bookingEndDate = dayjs(booking.dateTo);
      return day.isBetween(bookingStartDate, bookingEndDate, "day", "[]");
    });
  }
};