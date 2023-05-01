import { Box, Grid, Typography, Button } from "@mui/material";
import hero from "../../image/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Grid container sx={{ mt: 10 }} spacing={0}>
      <Grid
        item
        sm={12}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h2">Holidaze</Typography>
          <Typography variant="p">
            Escape the daily grind and unwind with Holidaze! Our website offers
            a wide selection of vacation rentals in top destinations around the
            world, with easy booking and competitive prices. Book your dream
            vacation today with Holidaze!
          </Typography>
        </Box>
        <Button component={Link} to={"/venues"} variant="contained">
          See all venues
        </Button>
      </Grid>
      <Grid item sm={12} md={7}>
        <img
          src={hero}
          alt=""
          sx={{
            width: "100%",
           
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Hero;
