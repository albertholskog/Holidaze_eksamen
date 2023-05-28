import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";

function ImagesList({ data }) {
  console.log(data);

  return (
    <ImageList sx={{ width: 1, height: 400 }} cols={4}>
      {data.map((item) => (
        <ImageListItem key={item.id} >
          <img
            src={`${item.media[0]}`}
            srcSet={`${item.media[0]}`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar title={item.name}  />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ImagesList;
