import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

test('App renders Acmansys', () => {
  const app = shallow(<App />);

  expect(app.contains(<h1>Acmansys</h1>)).toBe(true);
});
