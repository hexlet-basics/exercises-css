import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("colors", () => {
  const style = getComputedStyle(query(document, ".background-black-50"));
  expect(style.backgroundColor).toBe("rgba(0, 0, 0, 0.5)");
});
