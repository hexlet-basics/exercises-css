const { test } = require('tests');

test(({ query, expect, html }) => {
  expect(html).to.contain(':root');
  expect(html).to.contain('--main-blue');
  expect(html).to.contain('#00bfff');
});
