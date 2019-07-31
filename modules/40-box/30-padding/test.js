const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, '.padding');

  const style = getComputedStyle(element);
  expect(style).to.have.property('padding-top', '10px');
  expect(style).to.have.property('padding-bottom', '15px');
  expect(style).to.have.property('padding-left', '20px');
  expect(style).to.have.property('padding-right', '20px');
});
