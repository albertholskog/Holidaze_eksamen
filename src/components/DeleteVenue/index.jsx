import { Button, Typography } from "@mui/material";
import { useState } from "react";

function DeleteVenue({ id, setRefetch }) {
  const [error, setError] = useState(false);
  console.log(id);

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
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Typography>Are you sure you want to delete this venue?</Typography>
      {error ? (
        <Typography>Failed to delete the venue, try again</Typography>
      ) : null}
      <Button variant="contained" onClick={handelDelete}>
        Yes
      </Button>
      <Button variant="contained">No</Button>
    </>
  );
}

export default DeleteVenue;
