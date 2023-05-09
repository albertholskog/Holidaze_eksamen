import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdateProfilePhoto } from "../utils/schema";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Box, Button, Typography } from "@mui/material";
import TextFields from "../TextFields";

function UpdatePhotoForm() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      avatar: "",
    },
    resolver: yupResolver(schemaUpdateProfilePhoto),
  });
  const onSubmitUpdate = async (data) => {
    const name = localStorage.getItem("name");
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      console.log(response);
      if (!response.ok) {
        setError("An error has occurred, try another url");
      }else{
        navigate(0)
      }
    } catch (error) {
        setError(error);
    }
  };
  return (
    <Box noValidate component="form" onSubmit={handleSubmit(onSubmitUpdate)}>
      {error && <Typography>{error}</Typography>}
      <TextFields errors={errors} control={control} name="avatar" label="Url" />
      <Box textAlign="center">
        <Button type="submit" variant="contained">
          Update photo
        </Button>
      </Box>
    </Box>
  );
}

export default UpdatePhotoForm;
