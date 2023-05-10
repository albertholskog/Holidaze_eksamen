import { Box, Button } from "@mui/material";

function UpdateVenueFrom() {

  const handelTest = (e) => {
    e.stopPropagation();
  };
  return (
    <> 
      <Box component="form" onSubmit={() => console.log("hei")}>
        <Button type="submit">click</Button>
      </Box>
    </>
  );
}

export default UpdateVenueFrom;
