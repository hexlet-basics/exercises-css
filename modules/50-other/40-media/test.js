const { test } = require('tests');

test(({ query, expect, html }) => {
  expect(html).to.contain('@media');
  expect(html).to.contain('max-width');
  expect(html).to.contain('750px');
});
