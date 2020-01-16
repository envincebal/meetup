import React from 'react';
import {shallow} from 'enzyme';
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  const event = {
    created: 1550640143000,
    duration: 7200000,
    id: "zxvcsqybcdbwb",
    name: "Free Code Camp PDX Hangout",
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1581989400000,
    local_date: "2020-02-17",
    local_time: "17:30",
    updated: 1550640143000,
    utc_offset: -28800000,
    waitlist_count: 0,
    yes_rsvp_count: 3,
    venue: {
      id: 23590509,
      name: "Phase 2",
      lat: 45.526729583740234,
      lon: -122.68219757080078,
      repinned: true,
      address_1: "514 NW 11th Ave. Ste 203",
      city: "Portland",
      country: "us",
      localized_country_name: "USA",
      zip: "",
      state: "OR"
    },
    group: {
      created: 1455169659000,
      name: "Free Code Camp Portland",
      id: 19553371,
      join_mode: "open",
      lat: 45.5,
      lon: -122.69000244140625,
      urlname: "Free-Code-Camp-Portland",
      who: "Campers",
      localized_location: "Portland, OR",
      state: "OR",
      country: "us",
      region: "en_US",
      timezone: "US/Pacific"
    },
    link: "https://www.meetup.com/Free-Code-Camp-Portland/events/zxvcsqybcdbwb/",
    description: "<p>Welcome campers! We meet every other Monday at Phase2 This is a laid back study/networking session. Bring your laptops and questions . All levels of experience welcome. www.freecodecamp.com</p> <p>********We start introductions and announcements at 5:45pm :) ****</p> ",
    visibility: "public",
    member_pay_fee: false
  }
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test("render event component", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("test if showDetails for events is false", () => {
    expect(EventWrapper.state("showDetails")).toBe(false);
  });

  test("test if event name is correct", () => {
    expect(EventWrapper.find(".event-name").text()).toBe("Free Code Camp PDX Hangout"); 
  });

  test("test if show/hide button is rendered", () => {
    expect(EventWrapper.find(".details-btn")).toHaveLength(1);
  });  

  test("test if button click will show details", () => {
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

}); 