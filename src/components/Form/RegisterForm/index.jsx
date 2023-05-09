import { Box, Button } from "@mui/material";
import TextFields from "../TextFields";
import SwitchInput from "../SwitchInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../utils/schema";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { useAuth } from "../../../utils/auth";

function RegisterForm() {
  const [errorApiMessage, setErrorApiMessage] = useState(null);
  const auth = useAuth();
  
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      avatar: "",
      venueManager: false,
    },
    resolver: yupResolver(schemaRegister),
  });

  const onSubmitRegister = async (data) => {
    try {
      const response = await fetch(
        "https://api.noroff.dev/api/v1/holidaze/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      const { email, password } = data;
      const loginData = { email, password };
      if (response.ok) {
        try {
          const response = await fetch(
            "https://api.noroff.dev/api/v1/holidaze/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(loginData),
            }
          );
          const result = await response.json();
          if (response.ok) {
            localStorage.setItem("accessToken", result.accessToken);
            localStorage.setItem("name", result.name);
            auth.login(true);
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        setErrorApiMessage(result.errors[0].message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box noValidate component="form" onSubmit={handleSubmit(onSubmitRegister)}>
      {errorApiMessage ? <ErrorMessage message={errorApiMessage} /> : null}
      <TextFields errors={errors} control={control} name="name" label="Name" />
      <TextFields
        errors={errors}
        control={control}
        name="email"
        label="Email"
      />
      <TextFields
        errors={errors}
        control={control}
        name="password"
        label="Password"
      />
      <TextFields
        errors={errors}
        control={control}
        name="avatar"
        label="Profile images"
      />
      <SwitchInput errors={errors} control={control} name="venueManager" />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
        Sign up
      </Button>
    </Box>
  );
}

export default RegisterForm;
