export function filterVenuesByMediaAndName(venues) {
    return venues.filter((venue) => {
      return venue.media.length > 0 && venue.name.length > 0;
    });
  }
  