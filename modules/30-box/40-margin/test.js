import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("margin", () => {
  const style = getComputedStyle(query(document, ".margin"));
  expect(style.margin).toBe("20px");
});
