import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("priority", () => {
  const element = query(document, "#no-border");
  expect(element).toHaveClass("border");
  expect(getComputedStyle(element).borderStyle).toBe("none");

  const otherParagraph = document.createElement("p");
  otherParagraph.classList.add("border");
  document.body.append(otherParagraph);
  const otherStyle = getComputedStyle(otherParagraph);
  expect(otherStyle.borderWidth, "the border class sets a 1px border").toBe("1px");
  expect(otherStyle.borderStyle, "the border class sets a solid border").toBe("solid");
});
