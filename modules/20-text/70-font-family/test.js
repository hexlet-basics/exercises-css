import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("font-family", () => {
  const element = query(document, "p");
  expect(element).toHaveClass("verdana-text");
  expect(getComputedStyle(element).fontFamily).toBe("Verdana, sans-serif");
});
