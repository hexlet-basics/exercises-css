const { test } = require('tests');

test(({ query, expect }) => {
  const div = query(document, '.header');
  const p = query(div, '.offer');

  const divStyle = getComputedStyle(div);
  const pStyle = getComputedStyle(p);

  expect(divStyle).to.have.property('font-size', '22px');
  expect(pStyle).to.have.property('font-size', '200%');
});
