import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("font-style", () => {
  const element = query(document, "p");
  expect(element).toHaveClass("italic-type");
  expect(getComputedStyle(element).fontStyle).toBe("oblique");
});
