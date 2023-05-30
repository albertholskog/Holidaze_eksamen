import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

function ImagesList({ data }) {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const dataItem = data.map((item, i) => {
    let cols;
    if (i === 0 || i === 3) {
      cols = 3;
    } else {
      cols = 1;
    }
    return {
      id: item.id,
      images: item.media[0],
      name: item.name,
      price: item.price,
      rows: 2,
      cols: cols,
    };
  });

  return (
    <ImageList sx={{ width: 1, mb: 10 }} cols={4} rowHeight={120}>
      {dataItem.map((item) => (
        <ImageListItem
          key={item.id}
          component={Link}
          to={`venues/${item.id}`}
          cols={matches ? item.cols || 1 : 4}
          rows={item.rows || 1}
        >
          <Box
            component={"img"}
            src={`${item.images}`}
            srcSet={`${item.images}`}
            alt={item.name}
            loading="lazy"
            sx={{ height: 1, borderRadius: 2, objectFit: "cover" }}
          />
          <ImageListItemBar
            title={item.name}
            subtitle={`$${item.price} per night`}
            sx={{
              
              borderBottomRightRadius: 7,
              borderBottomLeftRadius: 7,
              bgcolor: "rgba(245, 245, 245, 0.90)",
              color: "text.main",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ImagesList;
