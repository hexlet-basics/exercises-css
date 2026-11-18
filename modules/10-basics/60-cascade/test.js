import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("cascade", () => {
  const style = getComputedStyle(query(document, ".cascade"));
  expect(style.fontSize).toBe("25px");
  expect(style.padding).toBe("15px");
});
