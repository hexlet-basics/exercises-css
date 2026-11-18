import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("font-variant", () => {
  const element = query(document, "p");
  expect(element).toHaveClass("small-capitals");
  expect(getComputedStyle(element).fontVariant).toBe("small-caps");
});
