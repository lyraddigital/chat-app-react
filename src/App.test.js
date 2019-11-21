import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import rootReducer from './store/reducers';
import App from './App';

const store = createStore(rootReducer);

test('App loads with default state', () => {
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
