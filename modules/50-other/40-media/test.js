import { expect, test } from "vitest";
import { html } from "hexlet-basics/dom";

test("media queries", () => {
  expect(html).toContain("@media");
  expect(html).toContain("max-width");
  expect(html).toContain("750px");
});
