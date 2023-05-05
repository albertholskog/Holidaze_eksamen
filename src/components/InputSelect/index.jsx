import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function InputSelect({ maxGuests, onSelectGuests }) {
  const [guests, setGuests] = useState(1);

  const numberOfGuests = Array.from(
    { length: maxGuests },
    (_, index) => index + 1
  );

  const handleGuestsSelect = (event) => {
    const selectedGuests = event.target.value;
    setGuests(selectedGuests);
    onSelectGuests(selectedGuests);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Guests</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={guests}
        label="Guests"
        onChange={handleGuestsSelect}
      >
        {numberOfGuests.map((guests) => (
          <MenuItem key={guests} value={guests}>
            {guests}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default InputSelect;
