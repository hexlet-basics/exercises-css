import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("font-weight", () => {
  const element = query(document, "p");
  expect(element).toHaveClass("weight");
  expect(getComputedStyle(element).fontWeight).toBe("700");
});
