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
import CardIcon from "../CardIcon";

function CardVenue({
  name,
  price,
  guests,
  city,
  image,
  id,
  dateFrom,
  dateTo,
  profile,
  venueManager,
  setRefetch,
}) {
  const from = dayjs(dateFrom).format("DD/MM/YYYY");
  const to = dayjs(dateTo).format("DD/MM/YYYY");

  const cardMedia = () => (
    <CardMedia
      component="img"
      image={Array.isArray(image) && image.length > 0 ? image[0] : image}
      alt={name}
      sx={{ maxHeight: 150, minHeight: 150, borderRadius: 3 }}
    />
  );

  const cardContent = () => (
    <CardContent sx={{ p: 0, display: "flex", flexDirection: "column" }}>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="p">Max guests: {guests}</Typography>
      {city ? (
        <Typography variant="p">City: {city}</Typography>
      ) : (
        <Typography variant="p">City: unknown</Typography>
      )}
    </CardContent>
  );

  const cardIcons = () => <CardIcon id={id} setRefetch={setRefetch} />;

  if (profile && venueManager) {
    return (
      <Grid item xs={12} sm={5.7} md={5.7}>
        <Card elevation={0} sx={{ bgcolor: "transparent" }}>
          <Box component={Link} to={`/venues/${id}`}>
            {cardMedia()}
          </Box>
          <Box sx={{ position: "relative" }}>{cardIcons()}</Box>
          {cardContent()}
        </Card>
      </Grid>
    );
  }

  if (profile) {
    return (
      <Grid item xs={12} sm={5.7} md={5.7}>
        <Card
          component={Link}
          to={`/venues/${id}`}
          elevation={0}
          sx={{ bgcolor: "transparent", textDecoration: "none" }}
        >
          {cardMedia()}
          {cardContent()}
          <Typography variant="p">Booked for {guests} guests</Typography>
          <Typography variant="p">From: {from}</Typography>
          <Typography variant="p">To: {to}</Typography>
        </Card>
      </Grid>
    );
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        component={Link}
        to={`/venues/${id}`}
        elevation={0}
        sx={{ bgcolor: "transparent", textDecoration: "none" }}
      >
        {cardMedia()}
        <CardContent
          sx={{ display: "flex", flexDirection: "column", pl: 1, pt: 1 }}
        >
          <Typography variant="h3" sx={{ mb: 0.3 }}>
            {name}
          </Typography>
          <Typography variant="p" sx={{ mb: 0.2 }}>
            {city}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="p">Max guests: {guests}</Typography>
            <Typography variant="p">${price} per night</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardVenue;
