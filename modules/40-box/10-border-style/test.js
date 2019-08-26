const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, '.border-bold');

  const style = getComputedStyle(element);
  expect(style).to.have.property('border-width', '5px');
  expect(style).to.have.property('border-style', 'solid');
  expect(style).to.have.property('border-color', '#2196f3');
});
