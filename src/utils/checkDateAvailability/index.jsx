 import dayjs from "dayjs";
 
 
 export const checkDateRangeAvailability = (start, end, bookings) => {
    return !bookings.some((booking) => {
      const bookingStartDate = dayjs(booking.dateFrom);
      const bookingEndDate = dayjs(booking.dateTo);
      return start.isBefore(bookingEndDate) && end.isAfter(bookingStartDate);
    });
  };