import { expect, test } from "vitest";
import { query } from "hexlet-basics/dom";

test("box model", () => {
  const style = getComputedStyle(query(document, ".card-hello"));
  expect(style.width).toBe("230px");
  expect(style.height).toBe("25px");
  expect(style.padding).toBe("20px");
  expect(style.margin).toBe("10px");
  expect(style.color).toBe("rgb(255, 255, 255)");
  expect(style.fontSize).toBe("20px");
  expect(style.borderWidth).toBe("2px");
  expect(style.borderColor).toBe("rgb(156, 39, 176)");
  expect(style.borderStyle).toBe("solid");
  expect(style.backgroundColor).toBe("rgb(250, 114, 104)");
});
