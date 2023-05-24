import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

function CheckboxFields({ name, control, label }) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} />}
            checked={field.value}
            label={label}
          />
        )}
      />
    </>
  );
}

export default CheckboxFields;
