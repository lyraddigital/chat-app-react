import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

test('App loads with default state', () => {
  const component = renderer.create(
    <App />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
