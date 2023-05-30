import { getLocation } from "./getLocation";
import { describe, it, expect } from "vitest";

describe("getLocation", () => {
  it("should extract location information from the data object", () => {
    const data = {
      address: "Vestre Strandgate 12",
      city: "Kristiansand",
      country: "Norway",
      otherKey: "value",
    };

    const result = getLocation(data);

    expect(result).toEqual({
      address: "Vestre Strandgate 12",
      city: "Kristiansand",
      country: "Norway",
    });
  });

  it("should return an empty object when there is no location information in the data object", () => {
    const data = {
      otherKey: "value",
    };

    const result = getLocation(data);

    expect(result).toEqual({});
  });
});
