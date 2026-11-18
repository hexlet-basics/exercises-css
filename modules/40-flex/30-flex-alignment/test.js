import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("flex alignment", () => {
  const style = getComputedStyle(query(document, ".qa"));
  expect(style.display).toBe("flex");
  expect(style.alignItems).toBe("center");
});
