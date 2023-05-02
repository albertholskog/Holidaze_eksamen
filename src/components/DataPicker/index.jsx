import { disableDate } from "./utils/disableDate";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

function DataPicker({ bookings, label }) {
  const [selectedDate, setSelectedDate] = useState(null);
  

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          disablePast={true}
          disableHighlightToday={true}
          shouldDisableDate={(day) => disableDate(day, bookings)}
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DataPicker;
