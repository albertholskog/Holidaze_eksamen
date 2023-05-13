import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function CarouselVenue({ media, name }) {
  return (
    <>
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
          alt={name}
        />
      )}
    </>
  );
}

export default CarouselVenue;
