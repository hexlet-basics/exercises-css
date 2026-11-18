import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("color", () => {
  const element = query(document, "span");
  expect(element).toHaveClass("violet");
  expect(getComputedStyle(element).color).toBe("rgb(148, 0, 211)");
});
