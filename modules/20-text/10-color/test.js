const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'span');
  expect(element).to.have.class('violet');

  const style = getComputedStyle(element);
  expect(style).to.have.property('color', 'rgb(148, 0, 211)');
});
