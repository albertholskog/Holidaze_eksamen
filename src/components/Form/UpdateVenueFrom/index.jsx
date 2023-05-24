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

function UpdateVenueFrom({ id, setRefetch, venueData }) {
  const [error, setError] = useState(null);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: venueData.name,
      description: venueData.description,
      price: venueData.price,
      maxGuests: venueData.maxGuests,
      address: venueData.location.address,
      city: venueData.location.city,
      country: venueData.location.country,
      wifi: venueData.meta.wifi,
      parking: venueData.meta.parking,
      breakfast: venueData.meta.breakfast,
      pets: venueData.meta.pets,
      media0: venueData.media.length > 0 ? venueData.media[0] : "",
      media1: venueData.media.length > 1 ? venueData.media[1] : "",
      media2: venueData.media.length > 1 ? venueData.media[2] : "",
    },
    resolver: yupResolver(schemaUpdateVenue),
  });

  const onSubmitAddVenue = async (data) => {
    const filteredData = filterData(data);
    const media = extractMediaItems(data);

    const location = getLocation(data);
    const meta = metaData(data);

    const formData = {
      ...filteredData,
      media,
      location,
      meta,
    };


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
       
      />
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
      <TextFields
        errors={errors}
        control={control}
        name="city"
        label="City"
      
      />
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

      <TextFields
        errors={errors}
        control={control}
        name="media0"
        label="Photo"
        
      />
      <TextFields
        errors={errors}
        control={control}
        name="media1"
        label="Photo"
        notRequired
      />
      <TextFields
        errors={errors}
        control={control}
        name="media2"
        label="Photo"
        notRequired
      />
      <Button variant="contained" type="submit">
        Update
      </Button>
    </Box>
  );
}

export default UpdateVenueFrom;
