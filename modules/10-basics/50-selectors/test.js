const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'p');

  expect(element).to.have.class('bold');
  expect(element).to.have.id('red');

  const style = getComputedStyle(element);

  expect(style).to.have.property('font-weight', 'bold');
  expect(style).to.have.property('color', 'red');
});
