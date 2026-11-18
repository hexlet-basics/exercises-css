import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("inheritance", () => {
  const div = query(document, "div");
  const p = query(div, "p");
  expect(getComputedStyle(div).fontSize).toBe("20px");
  expect(getComputedStyle(p).fontSize).toBe("10px");
});
