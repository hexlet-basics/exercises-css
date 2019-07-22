const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'p');
  expect(element).to.have.class('important');

  const style = getComputedStyle(element);
  expect(style).to.have.property('text-align', 'center');
});
