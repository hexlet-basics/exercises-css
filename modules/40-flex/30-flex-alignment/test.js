const { test } = require('tests');

test(({ query, expect }) => {
  const flexContainer = query(document, '.qa');

  const style = getComputedStyle(flexContainer);
  expect(style).to.have.property('display', 'flex');
  expect(style).to.have.property('align-items', 'center');
});
