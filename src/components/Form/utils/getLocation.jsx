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
