import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function CarouselItem({ item, matches }) {
  if (item && matches) {
    return (
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", gap: 1 }}
      >
        {item.map((slice) => {
          return (
            <Grid item md={3.9} key={slice.id} sx={{ position: "relative" }}>
              <Box component={Link} to={`/venues/${slice.id}`}>
                <Box
                  sx={{ height: 280, width: "100%", borderRadius: "8px", objectFit: "cover", }}
                  component="img"
                  src={slice.media[0]}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 5,
                  bgcolor: "rgba(245, 245, 245, 0.90)",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "0, 0, 8px, 8px",
                }}
              >
                <Typography variant="h6" noWrap sx={{ ml: 1 }}>
                  {slice.name}
                </Typography>
                <Typography sx={{ ml: 1 }}>${slice.price} per night</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    );
  }
  return (
    <Grid container  sx={{ display: "flex", justifyContent: "center"}}>
      <Grid item xs={12} sx={{ position: "relative" }}>
        <Box component={Link} to={`/venues/${item.id}`}>
          <Box
            sx={{ height: 280, width: "100%", borderRadius: "8px",objectFit: "cover", }}
            component="img"
            src={item.media[0]}
            alt=""
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 5,
            bgcolor: "rgba(245, 245, 245, 0.90)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "0, 0, 8px, 8px",
          }}
        >
          <Typography variant="h6" noWrap sx={{ ml: 1 }}>
            {item.name}
          </Typography>
          <Typography sx={{ ml: 1 }}>${item.price} per night</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CarouselItem;
