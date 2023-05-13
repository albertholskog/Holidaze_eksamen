import Carousel from "react-material-ui-carousel";
import CarouselItem from "../CarouselItem";
import {useMediaQuery } from "@mui/material";

function CarouselBody({data}) {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

if (data) {
  
}
  if (data && matches) {
    const slideOne = data.slice(0, 3);
    const slideTwo = data.slice(3, 6);
    const slideThree = data.slice(6, 9);

    return (
      <Carousel
        interval={8000}
        duration={700}
        animation="slide"
        navButtonsAlwaysVisible={true}
        indicators={false}
      >
        <CarouselItem item={slideOne} matches={matches} />
        <CarouselItem item={slideTwo} matches={matches} />
        <CarouselItem item={slideThree} matches={matches} />
      </Carousel>
    );
  }

  if (data && !matches) {
    const slideData = data.slice(0, 9);
    return (
      <Carousel
        interval={8000}
        duration={700}
        animation="slide"
        navButtonsAlwaysVisible={true}
        indicators={false}
      >
        {slideData.map((item) => (
          <CarouselItem key={item.id} item={item} matches={matches} />
        ))}
      </Carousel>
    );
  }
}

export default CarouselBody;
