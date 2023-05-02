import DataPicker from "../DataPicker";

function VenuesBooking({ bookings }) {
  return (
    <>
      <DataPicker bookings={bookings} label={"From"} />
      <DataPicker bookings={bookings} label={"To"} />
    </>
  );
}

export default VenuesBooking;
