import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("position", () => {
  const style = getComputedStyle(query(document, ".relative-position"));
  expect(style.position).toBe("relative");
  expect(style.top).toBe("100px");
  expect(style.right).toBe("50px");
});
