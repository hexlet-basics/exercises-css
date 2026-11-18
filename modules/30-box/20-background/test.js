import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("background", () => {
  const style = getComputedStyle(query(document, ".background"));
  expect(style.backgroundColor).toBe("rgb(33, 150, 243)");
});
