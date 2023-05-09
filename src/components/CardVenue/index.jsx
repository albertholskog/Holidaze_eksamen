import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import CardActions from "../CardActions";

function CardVenue({
  image,
  name,
  guests,
  price,
  city,
  id,
  dateFrom,
  dateTo,
  profile,
  venueManager,
}) {
  const from = dayjs(dateFrom).format("DD/MM/YYYY");
  const to = dayjs(dateTo).format("DD/MM/YYYY");

  if (profile && venueManager) {
    return (
      <Grid item xs={12} sm={5.7} md={5.7}>
        <Card
          component={Link}
          to={`/venues/${id}`}
          elevation={0}
          sx={{ bgcolor: "transparent" }}
        >
          <Box sx={{ position: "relative" }}>
            <CardMedia
              sx={{ maxHeight: 150, minHeight: 150, borderRadius: 3 }}
              component="img"
              image={image}
              alt={name}
            />
            <CardActions id={id} />
          </Box>
          <CardContent sx={{ p: 0, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {name}
            </Typography>
            <Typography variant="p">Booked for {guests} guests</Typography>
            {city ? (
              <Typography variant="p">City: {city}</Typography>
            ) : (
              <Typography variant="p">City: unknown</Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    );
  }
  if (profile) {
    return (
      <Grid item xs={12} sm={5.7} md={5.7}>
        <Link to={`/venues/${id}`} style={{ textDecoration: "none" }}>
          <Card elevation={0} sx={{ bgcolor: "transparent" }}>
            <CardMedia
              sx={{ maxHeight: 150, minHeight: 150, borderRadius: 3 }}
              component="img"
              image={image}
              alt={name}
            />
            <CardContent
              sx={{ p: 0, display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {name}
              </Typography>
              <Typography variant="p">Booked for {guests} guests</Typography>
              {city ? (
                <Typography variant="p">City: {city}</Typography>
              ) : (
                <Typography variant="p">City: unknown</Typography>
              )}

              <Typography variant="p">From: {from}</Typography>
              <Typography variant="p">To: {to}</Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    );
  } else {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Link to={`/venues/${id}`} style={{ textDecoration: "none" }}>
          <Card elevation={0} sx={{ bgcolor: "transparent" }}>
            <CardMedia
              sx={{ height: 250 }}
              component="img"
              image={image}
              alt={name}
            />
            <CardContent>
              <Typography variant="h3" sx={{ fontWeight: 600 }}>
                {name}
              </Typography>
              <Typography variant="h4">Guests {guests}</Typography>
              <Typography variant="h4">{city}</Typography>
              <Typography variant="h4">${price} night</Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    );
  }
}

export default CardVenue;
