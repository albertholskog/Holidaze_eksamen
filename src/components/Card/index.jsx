import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function CardVenue({ image, name, max, price, city, id }) {
  return (
    <Grid item xs={12} sm={6} md={4} >
      <Link to={`/venues/${id}`} style={{ textDecoration: "none" }}>
        <Card elevation={0} sx={{ bgcolor: "transparent" }}>
          <CardMedia sx={{height:250}} component="img" image={image} alt={name} />
          <CardContent>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              {name}
            </Typography>
            <Typography variant="h4">Guests {max}</Typography>
            <Typography variant="h4">{city}</Typography>
            <Typography variant="h4">${price} night</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default CardVenue;
