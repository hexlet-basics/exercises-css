const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, 'p');
  expect(element).to.have.class('news');
  const style = getComputedStyle(element);
  // NOTE: Почему-то тест с #55333 значением не работает и требуется rgb
  // AssertionError: expected { Object (0, 1, ...) } to have property 'color' of '#553333', but got 'rgb(85, 51, 51)'
  expect(style).to.have.property('color', 'rgb(85, 51, 51)');
});
