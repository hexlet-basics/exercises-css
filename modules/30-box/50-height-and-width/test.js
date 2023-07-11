const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, '.rectangle');

  const style = getComputedStyle(element);
  expect(style).to.have.property('width', '300px');
  expect(style).to.have.property('height', '100px');
  expect(style).to.have.property('background-color', 'rgb(0, 0, 0)');
});
