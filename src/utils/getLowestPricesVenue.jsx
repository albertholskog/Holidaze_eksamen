export function getLowestPricesVenue(data) {
    const sortedVenues = [...data].sort((a, b) => a.price - b.price);
    return sortedVenues;
  }