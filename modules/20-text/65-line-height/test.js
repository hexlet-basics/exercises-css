const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'p');
  expect(element).to.have.class('line-height');

  const style = getComputedStyle(element);
  expect(style).to.have.property('font-size', '24px');
  expect(style).to.have.property('line-height', '36px');
});
