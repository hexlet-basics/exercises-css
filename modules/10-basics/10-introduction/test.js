const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'p');

  const style = getComputedStyle(element);
  expect(style).to.have.property('font-size', '25px');
});
