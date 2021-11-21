import React from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from '../../store/store';
import {shallow} from 'enzyme';

describe('Testing <Header/>', () => {
  it('Header have rendered', () => {
    const header = shallow(<Provider store={store}><Header/></Provider>);
    expect(header).toMatchSnapshot();
  })
});