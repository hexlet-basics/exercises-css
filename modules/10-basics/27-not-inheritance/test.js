const { test } = require('tests');

test(({ query, expect }) => {
  const p = query(document, 'p');

  const styleP = getComputedStyle(p);
  expect(styleP).to.have.property('border', '5px');
});
