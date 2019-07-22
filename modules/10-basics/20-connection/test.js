const { test } = require('tests');

test(({ query, expect }) => {
  const p = query(document, 'p');
  expect(p).to.have.attr('style', 'font-size: 12px');
});
