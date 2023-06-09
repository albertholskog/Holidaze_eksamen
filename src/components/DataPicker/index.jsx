import { disableDate } from "./utils/disableDate";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

function DataPicker({ bookings, label, onSelectDate, dateStart }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    onSelectDate(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          disablePast={true}
          disableHighlightToday={true}
          shouldDisableDate={(day) => disableDate(day, bookings, dateStart)}
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
          sx={{ width: 1 }}
          views={["day"]}
          showDaysOutsideCurrentMonth={true}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DataPicker;
