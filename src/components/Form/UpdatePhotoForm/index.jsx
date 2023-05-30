import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdateProfilePhoto } from "../utils/schema";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import TextFields from "../TextFields";
import ErrorMessage from "../ErrorMessage";

function UpdatePhotoForm({ setRefetch }) {
  const [error, setError] = useState(null);
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
 
      if (response.ok) {
        setRefetch((prevRefetch) => !prevRefetch);
      } else {
        setError("An error has occurred, try another url");
      }
    } catch (error) {
      setError("An error has occurred, try another url");
    }
  };
  return (
    <Box noValidate component="form" onSubmit={handleSubmit(onSubmitUpdate)}>
      {error && <ErrorMessage message={error} />}
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
