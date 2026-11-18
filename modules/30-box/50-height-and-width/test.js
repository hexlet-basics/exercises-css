import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("height and width", () => {
  const style = getComputedStyle(query(document, ".rectangle"));
  expect(style.width).toBe("300px");
  expect(style.height).toBe("100px");
  expect(style.backgroundColor).toBe("rgb(0, 0, 0)");
});
