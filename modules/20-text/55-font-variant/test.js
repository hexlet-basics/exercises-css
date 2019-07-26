const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'p');
  expect(element).to.have.class('small-capitals');

  const style = getComputedStyle(element);
  expect(style).to.have.property('font-variant', 'small-caps');
});
