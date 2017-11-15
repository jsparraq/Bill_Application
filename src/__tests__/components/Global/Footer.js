import React from 'react';
import { render } from 'enzyme';
import Footer from '../../../components/Global/Footer';


it('Simon', () => {
  const wrapper = render(<Footer />);
  expect(wrapper.find(".Simon").text()).toBe("Hecho por Simon Zea");
});


it('Sebastian', () => {
  const wrapper = render(<Footer />);
  expect(wrapper.find(".Sebastian").text()).toBe("Hecho por Sebastian Parra");
});
