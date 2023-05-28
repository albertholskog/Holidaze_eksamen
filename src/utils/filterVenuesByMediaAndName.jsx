/**
 * Filters venues based on the presence of media and name.
 * @param {Array} venues - An array of venue objects to filter.
 * @returns {Array} - The filtered array of venue objects.
 */
export function filterVenuesByMediaAndName(venues) {
  return venues.filter((venue) => {
    return venue.media.length > 0 && venue.name.length > 0;
  });
}
