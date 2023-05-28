import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import noImage from "../../../image/noImage.jpg";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function CarouselVenue({ media, name }) {
  const navigate = useNavigate();

  return (
    <>
      <Box
        onClick={() => navigate(-1)}
        sx={{ display: "flex", mb: 2, cursor: "pointer" }}
      >
        <ArrowBackIcon />
        <Typography>Back</Typography>
      </Box>
      {media.length > 1 ? (
        <Carousel interval={8000} duration={700} animation="slide">
          {media.map((mediaItem, index) => (
            <Box
              key={index}
              sx={{
                height: 350,
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
              component="img"
              src={mediaItem}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = noImage;
              }}
              alt={name}
            />
          ))}
        </Carousel>
      ) : (
        <Box
          sx={{
            height: 350,
            width: "100%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
          component="img"
          src={media[0]}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = noImage;
          }}
          alt={name}
        />
      )}
    </>
  );
}

export default CarouselVenue;
