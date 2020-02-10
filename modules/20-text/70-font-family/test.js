const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'p');
  expect(element).to.have.class('verdana-text');

  const style = getComputedStyle(element);
  expect(style).to.have.property('font-family', 'Verdana, sans-serif');
});
