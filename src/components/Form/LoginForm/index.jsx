import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../utils/schema";
import ErrorMessage from "../ErrorMessage";
import TextFields from "../TextFields";
import { Box, Button } from "@mui/material";
import { useAuth } from "../../../utils/auth";
import { useState } from "react";

function LoginForm() {
  const auth = useAuth();
  const [error, setError] = useState(null);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schemaLogin),
  });

  const onSubmitLogin = async (data) => {
    try {
      const response = await fetch(
        "https://api.noroff.dev/api/v1/holidaze/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
     

      if (response.ok) {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("name", result.name);
        auth.login(true);
      } else {
        setError(result.errors[0].message);
      }
    } catch (error) {
      setError("Failed to Sign up, try again");
    }
  };
  return (
    <Box noValidate component="form" onSubmit={handleSubmit(onSubmitLogin)}>
      {error && <ErrorMessage message={error} />}
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
        type="password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
        Sign in
      </Button>
    </Box>
  );
}

export default LoginForm;
