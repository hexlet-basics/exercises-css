import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("styles for a header", () => {
  query(document, "style");
  const header = query(document, "h1");
  expect(header).toBeVisible();
  expect(getComputedStyle(header).fontSize).toBe("20px");
});
