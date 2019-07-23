const { test } = require('tests');

test(({ query, expect }) => {
  const styleTag = query(document, 'style');
  expect(styleTag).to.be.visible;

  const paragraph = query(document, 'p')
  const styleP = getComputedStyle(paragraph);

  expect(styleP).to.have.property('font-size', '10px');
});
