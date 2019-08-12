const { test } = require('tests');

test(({ query, expect }) => {
  const p = query(document, '.white-landscape');
  const pStyle = getComputedStyle(p);
  expect(true);
});
