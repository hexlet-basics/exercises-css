import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("selectors", () => {
  const element = query(document, "p");
  expect(element).toHaveClass("bold");
  expect(element).toHaveAttribute("id", "red");

  const style = getComputedStyle(element);
  expect(style.fontWeight).toBe("700");
  expect(style.color).toBe("rgb(255, 0, 0)");
});
