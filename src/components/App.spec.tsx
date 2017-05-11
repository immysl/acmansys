import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from './layout/Header';
import Footer from './layout/Footer';

const wrapper = shallow(<App/>);

test('App renders Header and Footer', () => {
  expect(wrapper.containsAllMatchingElements([
    <Header />,
    <Footer />
  ])).toBe(true);
});
