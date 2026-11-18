import { expect, test } from "vitest";
import { html, query } from "hexlet-basics/dom";

test("units", () => {
  const div = query(document, ".header");
  const p = query(div, ".offer");
  expect(getComputedStyle(div).fontSize).toBe("22px");
  expect(html).toContain("200%");
  expect(getComputedStyle(p).fontSize).toBe("44px");
});
