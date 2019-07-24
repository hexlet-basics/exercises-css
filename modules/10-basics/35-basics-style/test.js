const { test } = require('tests');

test(({ query, expect }) => {
  const styleTag = query(document, 'style');
  expect(styleTag).to.be.visible;

  const header = query(document, 'h1')
  expect(header).to.be.visible;

  const styleHeader = getComputedStyle(header);
  expect(styleHeader).to.have.property('font-size', '20px');
});
