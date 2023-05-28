/**
 * Extracts media items form the given data object
 * @param {object}  data object that containing media items
 * @returns {Array} an array of media items
 */


export function extractMediaItems(data) {
  const mediaItems = Object.keys(data)
    .filter((key) => key.startsWith("media") && data[key].length > 0)
    .map((key) => data[key]);

  return mediaItems.length > 0 ? mediaItems : [];
}
