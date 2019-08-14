const { test } = require('tests');

test(({ query, expect }) => {
  const div = query(document, '.relative-position');
  const divStyle = getComputedStyle(div);

  expect(divStyle).to.have.property('position', 'relative');
  expect(divStyle).to.have.property('top', '100px');
  expect(divStyle).to.have.property('right', '50px');
});
