import { Switch, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

function SwitchInput({name, control}) {
  return (
    <>
      <Controller 
      name={name}
      control={control}
      render={({field})=>(<FormControlLabel
        control={<Switch  {...field} />}
        label="Venue manager"
      />)}
      />
      
    </>
  );
}

export default SwitchInput;
