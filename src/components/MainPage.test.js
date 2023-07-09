import { shallow, mount, render } from "enzyme";
import React from "react";
import App from "../containers/App";
import MainPage from "./MainPage";

let wrapper, wrapper2;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: '',
    isPending: false
  }

  wrapper = shallow(<MainPage { ...mockProps } />);
})

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: '',
    isPending: false
  }

  wrapper2 = shallow(<MainPage { ...mockProps2 } />);
  expect(wrapper2.instance().filterRobots([])).toEqual([]);
  expect(wrapper2.instance().filterRobots([])).toEqual([]);
});

// it('expect to render App component', () => {
//   // const mockStore = {
//   //   robots: [],
//   //   searchField: ''
//   // };

//   expect(shallow(<App />)).toMatchSnapshot();
// });


