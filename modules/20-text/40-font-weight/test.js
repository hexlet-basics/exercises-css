const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'p');
  expect(element).to.have.class('weight');

  const style = getComputedStyle(element);
  expect(style).to.have.property('font-weight', 'bold');
});
