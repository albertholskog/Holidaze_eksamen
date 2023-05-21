import { Grid, TextField, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveSearchData } from "../../features/venueSearchSlice";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [guests, setGuests] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [destination, setDestination] = useState("");

  const guestOptions = [
    { label: "-", value: "-" },
    { label: "1 - 5", value: "1-5" },
    { label: "5 - 10", value: "5-10" },
    { label: "10 - 15", value: "10-15" },
    { label: "15 - 20", value: "15-20" },
    { label: "20+", value: "20+" },
  ];
  const priceRangeOptions = [
    { label: "-", value: "-" },
    { label: "1 - 50", value: "1-50" },
    { label: "50 - 100", value: "50-100" },
    { label: "100 - 150", value: "100-150" },
    { label: "150+", value: "150+" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = {
      destination,
      guests,
      priceRange,
    };
    dispatch(saveSearchData(searchData));
    navigate("/venues")
  };
  return (
    <Grid
      container
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        pt: 10,
        pb: 10,
        pl: 5,
        pr: 5,
        bgcolor: "#E4DDDA",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        gap: { xs: 0, sm: 2, md: 0 },
        rowGap: { xs: 2 },
        mb: 10,
      }}
    >
      <Grid item xs={12} md={5}>
        <TextField
          sx={{ width: "100%", bgcolor: "white.main" }}
          label="Where to travel to"
          placeholder="Destination or name of venue"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={5.7} md={2}>
        <TextField
          sx={{ width: "100%", bgcolor: "white.main" }}
          id="outlined-select-guests"
          select
          label="Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        >
          {guestOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={5.7} md={2}>
        <TextField
          sx={{ width: "100%", bgcolor: "white.main" }}
          id="outlined-select-price"
          select
          label="Price"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          {priceRangeOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} md={2} sx={{ display: "flex" }}>
        <Button sx={{ width: "100%" }} type="submit" variant="contained">
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export default SearchBar;
