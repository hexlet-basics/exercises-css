const { test } = require('tests');

test(({ query, expect, html }) => {
  const element = query(document, '.bold-text');
  expect(element).to.have.class('bold-text');

  expect(html).to.contain('bold 24px Verdana, sans-serif');
});
