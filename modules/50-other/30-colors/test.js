const { test } = require('tests');

test(({ query, expect }) => {
  const p = query(document, '.background-black-50');
  const pStyle = getComputedStyle(p);

  expect(pStyle).to.have.property('background-color', 'rgba(0, 0, 0, 0.5)');
});
