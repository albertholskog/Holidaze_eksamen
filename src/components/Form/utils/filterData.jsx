export function filterData(data) {
  const filteredData = {};
  for (const key in data) {
    const value = data[key];
    if (
      !["media0", "media1", "media2", "country", "city", "address"].includes(
        key
      ) &&
      value != null &&
      value !== ""
    ) {
      filteredData[key] = value;
    }
  }
  return filteredData;
}
