import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

const wrapper = shallow(<Footer/>);

test('Footer contains footer element', () => {
  expect(wrapper.find('footer')).toHaveLength(1);
});

test('Footer renders copyright notice', () => {
  expect(wrapper.containsMatchingElement(<p><small>&copy;2017 Acmansys</small></p>)).toBe(true);
});
