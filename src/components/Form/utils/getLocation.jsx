/**
 * Extracts location information from the given data object.
 * @param {Object} data - The data object containing location information.
 * @returns {Object} - The extracted location object.
 */

export function getLocation(data) {
  const location = {};

  if (data.address) {
    location.address = data.address;
  }

  if (data.city) {
    location.city = data.city;
  }

  if (data.country) {
    location.country = data.country;
  }

  if (Object.keys(location).length === 0) {
    return {};
  }

  return location;
}
