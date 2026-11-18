import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("line-height", () => {
  const element = query(document, "p");
  expect(element).toHaveClass("line-height");

  const style = getComputedStyle(element);
  expect(style.fontSize).toBe("24px");
  expect(style.lineHeight).toBe("36px");
});
