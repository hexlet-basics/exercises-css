import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("flexible items", () => {
  const style = getComputedStyle(query(document, ".qa"));
  expect(style.display).toBe("flex");
  expect(style.alignItems).toBe("center");

  const arrowStyle = getComputedStyle(query(document, ".arrow"));
  expect(arrowStyle.flexGrow).toBe("1");
  expect(arrowStyle.textAlign).toBe("center");
});
