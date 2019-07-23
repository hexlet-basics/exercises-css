const { test } = require('tests');

test(({ query, expect }) => {
  const styleTag = query(document, 'style');
  expect(styleTag).to.be.visible;

  const header = query(document, 'h1')
  expect(header).to.be.visible;

  const div = query(document, 'div');
  const styleDiv = getComputedStyle(div);

  const paragraph = query(div, 'p');
  const styleP = getComputedStyle(paragraph);

  expect(styleP).to.have.property('font-size', '');
  expect(styleDiv).to.have.property('font-size', '10px');
});
