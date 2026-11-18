import { expect, test } from "vitest";
import { html, query } from "hexlet-basics/dom";

test("animation", () => {
  const style = getComputedStyle(query(document, ".black-white"));
  expect(html).toContain("@keyframes");
  expect(html).toContain("<style>");
  expect(style.animationName).not.toBe("none");
});
