export function extractMediaItems(data) {
  const mediaItems = Object.keys(data)
    .filter((key) => key.startsWith("media") && data[key].length > 0)
    .map((key) => data[key]);

  return mediaItems.length > 0 ? mediaItems : [];
}
