/**
 * Filters venues based on search criteria.
 *
 * @param {string} destination - The destination or name of the venue.
 * @param {string} guests - The number of guests.
 * @param {string} priceRange - The price range.
 * @param {Array} venues - An array of venue objects to filter.
 * @returns {Array} - The filtered array of venues that match the search criteria.
 */

export function searchMatch(destination, guests, priceRange, venues) {
  return venues.filter((venue) => {
    const { name, location, maxGuests, price } = venue;
    const { address, city, country } = location;
    const destinationMatch =
      !destination ||
      name.toLowerCase().includes(destination.toLowerCase()) ||
      address.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      country.toLowerCase().includes(destination.toLowerCase());

    const guestsMatch =
      !guests ||
      guests === "-" ||
      (guests === "1-5" && maxGuests >= 1 && maxGuests <= 5) ||
      (guests === "5-10" && maxGuests >= 5 && maxGuests <= 10) ||
      (guests === "10-15" && maxGuests >= 10 && maxGuests <= 15) ||
      (guests === "15-20" && maxGuests >= 15 && maxGuests <= 20) ||
      (guests === "20+" && maxGuests >= 20);

    const priceRangeMatch =
      !priceRange ||
      priceRange === "-" ||
      (priceRange === "1-50" && price >= 1 && price <= 50) ||
      (priceRange === "50-100" && price >= 50 && price <= 100) ||
      (priceRange === "100-150" && price >= 100 && price <= 150) ||
      (priceRange === "150+" && price >= 150);

    return destinationMatch && guestsMatch && priceRangeMatch;
  });
}
