import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import ErrorMessage from "../Form/ErrorMessage";

function DeleteVenue({ id, setRefetch }) {
  const [error, setError] = useState(null);

  const handelDelete = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        `https://api.noroff.dev/api/v1/holidaze/venues/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if (response.ok) {
        setRefetch((prevRefetch) => !prevRefetch);
        setError(null);
      } else {
        setError("Failed to delete the venue, try again");
      }
    } catch (error) {
      setError("Failed to delete the venue, try again");
    }
  };

  return (
    <>
      <Typography>Are you sure you want to delete this venue?</Typography>
      {error && <ErrorMessage message={error} />}
      <Box sx={{display:"flex", justifyContent:"center", mt:2}}>
        <Button variant="contained" onClick={handelDelete}>
          Yes
        </Button>
      </Box>
    </>
  );
}

export default DeleteVenue;
