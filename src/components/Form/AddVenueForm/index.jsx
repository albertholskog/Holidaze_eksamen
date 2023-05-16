import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddVenue } from "../utils/schema";
import TextFields from "../TextFields";
import { Box, Button, Typography } from "@mui/material";
import CheckboxFields from "../CheckboxFields";
import { useState } from "react";
import { extractMediaItems } from "../utils/extractMediaItems";
import { filterData } from "../utils/filterData";
import { getLocation } from "../utils/getLocation";
import { metaData } from "../utils/metaData";

function AddVenueForm({ setRefetch }) {
  const [mediaFields, setMediaFields] = useState(1);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      maxGuests: "",
      address: "",
      city: "",
      country: "",
      media0: "",
      media1: "",
      media2: "",
    },
    resolver: yupResolver(schemaAddVenue),
  });

  const handelAddField = () => {
    if (mediaFields < 3) {
      setMediaFields(mediaFields + 1);
    }
  };

  const onSubmitAddVenue = async (data) => {
    console.log(data);
    const media = extractMediaItems(data);
    const filteredData = filterData(data);
    const meta = metaData(data);
    const location = getLocation(data);

    const formData = {
      ...filteredData,
      media,
      meta,
      location,
    };

    console.log(formData);
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        "https://api.noroff.dev/api/v1/holidaze/venues",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(response);
      setRefetch((prevRefetch) => !prevRefetch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box noValidate component="form" onSubmit={handleSubmit(onSubmitAddVenue)}>
      <Typography>Add Venue</Typography>
      <TextFields errors={errors} control={control} name="name" label="Title" />
      <TextFields
        errors={errors}
        control={control}
        name="description"
        label="Description"
      />
      <TextFields
        errors={errors}
        control={control}
        name="price"
        label="Price per night"
      />
      <TextFields
        errors={errors}
        control={control}
        name="maxGuests"
        label="Max guests"
      />
      <TextFields
        errors={errors}
        control={control}
        name="address"
        label="Address"
      />
      <TextFields errors={errors} control={control} name="city" label="City" />
      <TextFields
        errors={errors}
        control={control}
        name="country"
        label="Country"
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
          />
        ))}
        {mediaFields < 3 ? (
          <Button onClick={handelAddField}>Add more Photo</Button>
        ) : null}
      </Box>
      <Button variant="contained" type="submit">
        Add venue
      </Button>
    </Box>
  );
}

export default AddVenueForm;
