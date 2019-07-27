const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, '.bold-text');
  expect(element).to.have.class('bold-text');

  const style = getComputedStyle(element);
  expect(style).to.have.property('font-family', 'Verdana');
  expect(style).to.have.property('font-weight', 'bold');
  expect(style).to.have.property('font-size', '24px');
});
