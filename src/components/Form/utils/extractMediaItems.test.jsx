import { extractMediaItems } from "./extractMediaItems";
import { describe, it, expect } from "vitest";

describe("extractMediaItems", () => {
    it("should return an array of media items when there are matching keys with non-empty values", () => {
      const data = {
        media1: ["image1.jpg", "image2.jpg"],
        media2: ["video1.mp4", "video2.mp4"],
        media3: [],
        otherKey: "value",
      };
  
      const result = extractMediaItems(data);
  
      expect(result).toEqual([["image1.jpg", "image2.jpg"], ["video1.mp4", "video2.mp4"]]);
    });
  
    it("should return an empty array when there are no matching keys or all matching keys have empty values", () => {
      const data = {
        media1: [],
        media2: [],
        otherKey: "value",
      };
  
      const result = extractMediaItems(data);
  
      expect(result).toEqual([]);
    });
  });