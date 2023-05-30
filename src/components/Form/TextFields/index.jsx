import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { inputErrors } from "../utils/inputErrors";
import ErrorMessage from "../ErrorMessage";

function TextFields({ label, control, name, errors, notRequired, type }) {
  if (notRequired) {
    return (
      <FormControl fullWidth sx={{ mb: "1rem" }}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              {...inputErrors(errors[name])}
              label={label}
              variant="filled"
            />
          )}
        />
        {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
      </FormControl>
    );
  }
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            type={type}
            required
            {...field}
            {...inputErrors(errors[name])}
            label={label}
            variant="filled"
          />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
}

export default TextFields;
