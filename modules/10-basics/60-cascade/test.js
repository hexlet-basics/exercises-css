const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, '.cascade');
  const style = getComputedStyle(element);

  expect(style).to.have.property('font-size', '25px');
  expect(style).to.have.property('padding', '15px');
});
