const { test } = require('tests');

test(({ query, expect }) => {
  const element = query(document, '.card-hello');
  const style = getComputedStyle(element);

  expect(style).to.have.property('width', '230px');
  expect(style).to.have.property('height', '25px');

  expect(style).to.have.property('padding', '20px');
  expect(style).to.have.property('margin', '10px');

  expect(style).to.have.property('color', 'rgb(255, 255, 255)');
  expect(style).to.have.property('font-size', '20px');

  expect(style).to.have.property('border-width', '2px');
  expect(style).to.have.property('border-color', 'rgb(156, 39, 176)');
  expect(style).to.have.property('border-style', 'solid');

  expect(style).to.have.property('background-color', 'rgb(250, 114, 104)');
});
