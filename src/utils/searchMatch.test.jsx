import { searchMatch } from "./searchMatch";
import { describe, it, expect } from "vitest";

describe("searchMatch", () => {
  const venues = [
    {
      name: "Venue 1",
      location: {
        address: "Øvre ring vei",
        city: "Kristiansand",
        country: "Norway",
      },
      maxGuests: 5,
      price: 80,
    },
    {
      name: "Venue 2",
      location: {
        address: "Mei street 12",
        city: "London",
        country: "England",
      },
      maxGuests: 10,
      price: 120,
    },
    {
      name: "Venue 3",
      location: {
        address: "Karl Johan 12",
        city: "Oslo",
        country: "Norway",
      },
      maxGuests: 20,
      price: 200,
    },
  ];

  it("should filter venues based on the search criteria", () => {
    const result = searchMatch("Kristiansand", "5-10", "50-100", venues);

    expect(result).toEqual([
      {
        name: "Venue 1",
        location: {
          address: "Øvre ring vei",
        city: "Kristiansand",
        country: "Norway",
        },
        maxGuests: 5,
        price: 80,
      },
    ]);
  });

  it("should return all venues when search criteria are not provided", () => {
    const result = searchMatch("", "", "", venues);

    expect(result).toEqual(venues);
  });

  it("should return an empty array when no venues match the search criteria", () => {
    const result = searchMatch("paris", "15-20", "100-150", venues);

    expect(result).toEqual([]);
  });
});
