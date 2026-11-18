import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("style tag", () => {
  query(document, "style");
  const style = getComputedStyle(query(document, "p"));
  expect(style.fontSize).toBe("10px");
});
