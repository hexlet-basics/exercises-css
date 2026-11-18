import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("selectors by class", () => {
  const element = query(document, "p");
  expect(element).toHaveClass("news");
  expect(getComputedStyle(element).color).toBe("rgb(85, 51, 51)");

  const otherParagraph = document.createElement("p");
  document.body.append(otherParagraph);
  expect(
    getComputedStyle(otherParagraph).color,
    "the color is set only for the paragraph with the news class",
  ).not.toBe("rgb(85, 51, 51)");
});
