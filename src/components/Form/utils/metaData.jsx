export function metaData(data) {
  const meta = {};

  if (data.hasOwnProperty('wifi')) {
    meta.wifi = data.wifi;
  }

  if (data.hasOwnProperty('parking')) {
    meta.parking = data.parking;
  }

  if (data.hasOwnProperty('breakfast')) {
    meta.breakfast = data.breakfast;
  }

  if (data.hasOwnProperty('pets')) {
    meta.pets = data.pets;
  }

  return meta;
}
