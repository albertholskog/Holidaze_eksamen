import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";

function GetVenueInfo({ id, data }) {
 

  return (
    <>
      {data.bookings.length > 0
        ? data.bookings.map((booked) => (
            <Box key={booked.id}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography>
                  Booked from: {dayjs(booked.dateFrom).format("DD/MM/YYYY")}
                </Typography>
                <Typography>
                  To: {dayjs(booked.dateTo).format("DD/MM/YYYY")}
                </Typography>
                <Typography>Guests {booked.guests}</Typography>
              </Box>
            </Box>
          ))
        : <Typography>No one has booked at this venue</Typography>}
    </>
  );
}

export default GetVenueInfo;
