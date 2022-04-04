const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, '#no-border');
  const style = getComputedStyle(element);

  expect(style).to.have.property('border-width', '1px');
  expect(style).to.have.property('border-style', 'none');
});
