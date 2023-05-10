export function extractMediaItems(data) {
  return Object.keys(data)
    .filter(
      (key) =>
        key.startsWith("media") &&
        data[key] !== undefined &&
        data[key].length > 0
    )
    .map((key) => data[key]);
}
