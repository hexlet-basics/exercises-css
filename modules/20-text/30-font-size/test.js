const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'p');
  expect(element).to.have.class('big');

  const style = getComputedStyle(element);
  expect(style).to.have.property('font-size', '60px');
});
