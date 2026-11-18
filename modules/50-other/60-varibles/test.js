import { expect, test } from "vitest";
import { html } from "hexlet-basics/dom";

test("variables", () => {
  expect(html).toContain(":root");
  expect(html).toContain("--main-blue");
  expect(html).toContain("#00bfff");
});
