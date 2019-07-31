const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, '.background');

  const style = getComputedStyle(element);
  expect(style).to.have.property('background-color', 'rgb(33, 150, 243)');
});
