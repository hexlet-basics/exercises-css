import { expect, test } from "vitest";
import { html, query } from "hexlet-basics/dom";

test("font shorthand", () => {
  query(document, ".bold-text");
  expect(html).toContain("bold 24px Verdana, sans-serif");
});
