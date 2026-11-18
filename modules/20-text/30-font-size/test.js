import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("font-size", () => {
  const element = query(document, "p");
  expect(element).toHaveClass("big");
  expect(getComputedStyle(element).fontSize).toBe("60px");
});
