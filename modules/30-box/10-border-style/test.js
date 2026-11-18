import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("border", () => {
  const style = getComputedStyle(query(document, ".border-bold"));
  expect(style.borderWidth).toBe("5px");
  expect(style.borderStyle).toBe("solid");
  expect(style.borderColor).toBe("rgb(33, 150, 243)");
});
