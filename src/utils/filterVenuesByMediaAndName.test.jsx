import { filterVenuesByMediaAndName } from "./filterVenuesByMediaAndName";
import { describe, it, expect } from "vitest";

describe("filterVenuesByMediaAndName", () => {
  const venues = [
    { name: "Venue 1", media: ["image1.jpg"] },
    { name: "Venue 2", media: [] },
    { name: "", media: ["image2.jpg"] },
    { name: "", media: [] },
    { name: "Venue 3", media: ["image3.jpg", "image4.jpg"] },
  ];

  it("should filter venues based on the presence of media and name", () => {
    const result = filterVenuesByMediaAndName(venues);

    expect(result).toEqual([
      { name: "Venue 1", media: ["image1.jpg"] },
      { name: "Venue 3", media: ["image3.jpg", "image4.jpg"] },
    ]);
  });

  it("should return an empty array when no venues match the filter criteria", () => {
    const result = filterVenuesByMediaAndName([]);

    expect(result).toEqual([]);
  });
});
