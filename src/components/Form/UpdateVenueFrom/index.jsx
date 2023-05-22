import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdateVenue } from "../utils/schema";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import TextFields from "../TextFields";
import CheckboxFields from "../CheckboxFields";
import { extractMediaItems } from "../utils/extractMediaItems";
import { filterData } from "../utils/filterData";
import { getLocation } from "../utils/getLocation";
import { metaData } from "../utils/metaData";
import ErrorMessage from "../ErrorMessage";

function UpdateVenueFrom({ id, setRefetch }) {
  const [mediaFields, setMediaFields] = useState(1);
  const [error, setError] = useState(null);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: null,
      maxGuests: null,
      address: "",
      city: "",
      country: "",
      media0: "",
      media1: "",
      media2: "",
    },
    resolver: yupResolver(schemaUpdateVenue),
  });

  const handelAddField = () => {
    if (mediaFields < 3) {
      setMediaFields(mediaFields + 1);
    }
  };

  const onSubmitAddVenue = async (data) => {
    const filteredData = filterData(data);
    const media = extractMediaItems(data);
    const location = getLocation(data);
    const meta = metaData(data);

    const formData = {
      ...filteredData,
    };

    if (media.length > 0) {
      formData.media = media;
    }

    if (Object.keys(location).length > 0) {
      formData.location = location;
    }
    if (Object.keys(meta).length > 0) {
      formData.meta = meta;
    }

    console.log(formData);

    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        `https://api.noroff.dev/api/v1/holidaze/venues/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(response);
      if (response.ok) {
        setRefetch((prevRefetch) => !prevRefetch);
      } else {
        setError("Failed to delete the venue, try again");
      }
    } catch (error) {
      setError("Failed to delete the venue, try again");
    }
  };

  return (
    <Box noValidate component="form" onSubmit={handleSubmit(onSubmitAddVenue)}>
      <Typography>Update venue</Typography>
      {error && <ErrorMessage message={error} />}
      <TextFields
        errors={errors}
        control={control}
        name="name"
        label="Title"
        notRequired
      />
      <TextFields
        errors={errors}
        control={control}
        name="description"
        label="Description"
        notRequired
      />
      <TextFields
        errors={errors}
        control={control}
        name="price"
        label="Price per night"
        notRequired
      />
      <TextFields
        errors={errors}
        control={control}
        name="maxGuests"
        label="Max guests"
        notRequired
      />
      <TextFields
        errors={errors}
        control={control}
        name="address"
        label="Address"
        notRequired
      />
      <TextFields
        errors={errors}
        control={control}
        name="city"
        label="City"
        notRequired
      />
      <TextFields
        errors={errors}
        control={control}
        name="country"
        label="Country"
        notRequired
      />
      <CheckboxFields
        errors={errors}
        control={control}
        name="wifi"
        label="Wifi"
      />
      <CheckboxFields
        errors={errors}
        control={control}
        name="parking"
        label="Parking"
      />
      <CheckboxFields
        errors={errors}
        control={control}
        name="breakfast"
        label="Breakfast"
      />
      <CheckboxFields
        errors={errors}
        control={control}
        name="pets"
        label="Pets"
      />

      <Box>
        {[...Array(mediaFields)].map((_, i) => (
          <TextFields
            key={i}
            errors={errors}
            control={control}
            name={`media${i}`}
            label={`Photo ${i + 1}`}
            notRequired
          />
        ))}
        {mediaFields < 3 ? (
          <Button onClick={handelAddField}>Add more Photo</Button>
        ) : null}
      </Box>
      <Button variant="contained" type="submit">
        Update
      </Button>
    </Box>
  );
}

export default UpdateVenueFrom;
