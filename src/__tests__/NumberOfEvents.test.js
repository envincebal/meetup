import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents/> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render number of events component", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);  
  });

  test("render text input correctly", () => {
    const numberInput = NumberOfEventsWrapper.state("numberInput");
    expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(numberInput); 
  });


  test("renders default number of events per page is 32", () => {
    expect(NumberOfEventsWrapper.state("numberInput")).toBe(32);
});
}); 