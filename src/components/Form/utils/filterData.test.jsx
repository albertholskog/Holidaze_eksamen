import { filterData } from "./filterData";
import { describe, it, expect } from "vitest";

describe("filterData", () => {
  it("should filter the data object by removing specific keys and empty/null values", () => {
    const data = {
      media0: "image.jpg",
      media1: "video.mp4",
      country: "Norway",
      city: "",
      address: null,
      pets: false,
      breakfast: true,
      parking: "available",
      wifi: undefined,
      key1: "value1",
      key2: "value2",
    };

    const result = filterData(data);

    expect(result).toEqual({ key1: "value1", key2: "value2" });
  });

  it("should return an empty object if all keys are filtered out", () => {
    const data = {
      media0: "image.jpg",
      media1: "video.mp4",
      country: "Norway",
      city: "",
      address: null,
      pets: false,
      breakfast: true,
      parking: "available",
      wifi: undefined,
    };

    const result = filterData(data);

    expect(result).toEqual({});
  });
});
