const { test } = require('tests');

test(({ query, expect }) => {
  const p = query(document, 'p');
  expect(element).to.have.attr('style', 'font-size: 12px');
});
