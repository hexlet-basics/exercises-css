import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("padding", () => {
  const style = getComputedStyle(query(document, ".padding"));
  expect(style.paddingTop).toBe("10px");
  expect(style.paddingBottom).toBe("15px");
  expect(style.paddingLeft).toBe("20px");
  expect(style.paddingRight).toBe("20px");
});
