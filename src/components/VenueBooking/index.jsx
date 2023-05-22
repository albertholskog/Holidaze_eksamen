import { checkDateRangeAvailability } from "../../utils/checkDateAvailability";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import DataPicker from "../DataPicker";
import InputSelect from "../InputSelect";
import { useAuth } from "../../utils/auth";

function VenuesBooking({ bookings, maxGuests, id, name, price }) {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState(null);
  const [complete, setComplete] = useState(null);
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.user) {
      setError("Need to be logged in");
      return;
    }

    if (!fromDate || !toDate) {
      setError("Please select the date you want to travel");
      return;
    }

    if (fromDate.isAfter(toDate)) {
      setError("From date needs to be before To date");
      return;
    }

    const isDateRangeAvailable = checkDateRangeAvailability(
      fromDate,
      toDate,
      bookings
    );

    if (isDateRangeAvailable) {
      setError(null);

      const body = {
        dateFrom: fromDate.toISOString(),
        dateTo: toDate.toISOString(),
        guests: guests,
        venueId: id,
      };
      const token = localStorage.getItem("accessToken");

      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/holidaze/bookings",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
          }
        );

        if (response.ok) {
          setComplete(
            `You have booked "${name}" at the price ${price} per night `
          );
        } else {
          setError("Failed to book the venue, Api request failed");
        }
      } catch (error) {
        setError("An error occurred during the API call");
      }
    } else {
      setError("Dates are not available");
    }
  };

  const handleFromDateSelect = (newDate) => {
    setFromDate(newDate);
  };

  const handleToDateSelect = (newDate) => {
    setToDate(newDate);
  };

  const handleGuestsSelect = (newGuests) => {
    setGuests(newGuests);
  };

  return (
    <>
      <Typography variant="h3" sx={{ mb: 2.3 }}>
        Book venue
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        {error && <Typography sx={{color:"error.main", mb:2}} >{error}</Typography>}
        <InputSelect
          maxGuests={maxGuests}
          onSelectGuests={handleGuestsSelect}
        />
        <DataPicker
          bookings={bookings}
          label={"From"}
          onSelectDate={handleFromDateSelect}
        />
        <DataPicker
          bookings={bookings}
          label={"To"}
          onSelectDate={handleToDateSelect}
        />
        <Box sx={{ mt: 2.3, textAlign: "end" }}> 
          <Button type="submit" variant="contained" >
            Book venue
          </Button>
        </Box>
        {complete && <Typography>{complete}</Typography>}
      </Box>
    </>
  );
}

export default VenuesBooking;
