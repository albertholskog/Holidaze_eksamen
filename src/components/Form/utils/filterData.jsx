/**
 * Filters the given data object by removing specific keys and empty/null values.
 * @param {Object} data - The data object to be filtered.
 * @returns {Object} - The filtered data object.
 */

export function filterData(data) {
  const filteredData = {};
  for (const key in data) {
    const value = data[key];
    if (
      ![
        "media0",
        "media1",
        "media2",
        "country",
        "city",
        "address",
        "pets",
        "breakfast",
        "parking",
        "wifi",
      ].includes(key) &&
      value != null &&
      value !== ""
    ) {
      filteredData[key] = value;
    }
  }
  return filteredData;
}
