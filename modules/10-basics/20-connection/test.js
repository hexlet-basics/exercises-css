import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("connection", () => {
  const style = getComputedStyle(query(document, "p"));
  expect(style.fontSize).toBe("12px");
});
