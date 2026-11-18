import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("text-decoration", () => {
  const element = query(document, "p");
  expect(element).toHaveClass("line");
  expect(getComputedStyle(element).textDecoration).toBe("underline");
});
