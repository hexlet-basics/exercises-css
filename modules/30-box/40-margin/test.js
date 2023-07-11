const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, '.margin');

  const style = getComputedStyle(element);
  expect(style).to.have.property('margin', '20px');
});
