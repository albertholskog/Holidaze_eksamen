export function metaData(data) {
    const meta = {};
  
    if (data.breakfast) {
      meta.breakfast = data.breakfast;
    }
  
    if (data.pets) {
      meta.pets = data.pets;
    }
  
    if (data.wifi) {
      meta.wifi = data.wifi;
    }
    if (data.parking) {
      meta.parking = data.parking;
    }
  
    if (Object.keys(meta).length === 0) {
      return {};
    }
  
    return meta;
  }
  