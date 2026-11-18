import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("text-align", () => {
  const element = query(document, "p");
  expect(element).toHaveClass("important");
  expect(getComputedStyle(element).textAlign).toBe("center");
});
