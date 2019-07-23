const { test } = require('tests');

test(({ query, expect }) => {
  const div = query(document, 'div');
  const p = query(div, 'p');

  const styleDiv = getComputedStyle(div);
  expect(styleDiv).to.have.property('font-size', '20px');

  const styleP = getComputedStyle(p);
  expect(styleP).to.have.property('font-size', '10px');
});
