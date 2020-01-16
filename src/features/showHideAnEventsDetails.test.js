import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from "../App";
import {mount} from "enzyme";
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('Element is collapsed by default', ({ given, and, when, then }) => {
    given('list of events has been loaded', () => {});

    let AppWrapper;
    and('app has loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user did not click the Show Details yet', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockEvents.events.length);
    });

    then('the event elements are collapsed', () => {
      expect(AppWrapper.find("show-details")).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, and, when, then }) => {
    let AppWrapper;
    given('app loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('the list of events has been loaded', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockEvents.events.length);
    }); 

    when('the user clicks the button Show Details', () => {
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });
 
    then('the event element should expand and show more info', () => {
      expect(AppWrapper.find(".event .event-details")).toHaveLength(1);  
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    let AppWrapper;
    given('app loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('user expands and shows details', () => {
      AppWrapper.update();
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
      expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
    });
 
    when('the user clicks the Hide Details button', () => {
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    then('the event description collapses', () => {
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });
  });
});