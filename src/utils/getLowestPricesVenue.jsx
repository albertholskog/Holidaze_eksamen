export function getLowestPricesVenue(data) {
  const sortedVenues = [...data]
    .filter((venue) => venue.price > 0)
    .sort((a, b) => a.price - b.price);

  return sortedVenues;
}
