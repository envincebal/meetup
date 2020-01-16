import React from 'react';
import App from "../App";
import NumberOfEvents from '../NumberOfEvents';
import {mount} from "enzyme";
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('If user has not specified number, 32 is the default', ({ given, when, then }) => {
    given('user did not specify a number of events being shown', () => {});

    let AppWrapper;
    when('app loads', () => {
      AppWrapper = mount(<App />); 
    });

    then('the default number of shown events is 32', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event").length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change number of events they want to view', ({ given, when, then }) => {
    let AppWrapper;
    given('list of elements has been loaded and user did not specify a number of events', () => {
      AppWrapper = mount(<App />);
    });

    when('user specifies number of events', () => {
      const numberOfEvents = { target: { value: 13 } };
      AppWrapper.find('.number-of-events').simulate('change', numberOfEvents);
    });

    then('the maximum of events listed should be the specified number', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberInput')).toBe(32); 
    });
  });
}); 