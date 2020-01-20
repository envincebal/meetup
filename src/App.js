import React, {Component} from "react";
import "./App.css";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import {getEvents} from "./api";
import {OfflineAlert} from "./Alert";
import moment from "moment";
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";

class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      events: [],
      lat: null,
      lon: null,
      page: null,
      offlineText: ""
    }
  }

  componentDidMount() {
    this.updateEvents();
  }

  countEventsOnDate = (date) => {
    let count = 0;
    const {events} = this.state;

    events.forEach(event => {
      if (event.local_date === date){
        count++;
      }
    });
    return count;
  }

  getData = () => {
    const next7Days = [];
    const currentDate = moment();

    for (let i = 0; i < 7; i++) {
      currentDate.add(1, "days");
      const dateString = currentDate.format("YYYY-MM-DD");
      const count = this.countEventsOnDate(dateString);
      next7Days.push({ date: dateString, number: count });
    }
    return next7Days;
  }

  updateEvents = (lat, lon, page) => {
    if(!navigator.onLine) {
      this.setState({
        offlineText: "You appear to be offline, this list is cached. Please connect to the internet for an updated list."
      });
    } else {
      this.setState({
        offlineText: "",
      });
    }

    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events => {
        this.setState({events, lat, lon})
      })
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events => {
        this.setState({events, page})
      });

    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events => this.setState({events}));
    }
  }

  render() {
    return (
      <div className="App">
        <OfflineAlert text={this.state.offlineText} />
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <ResponsiveContainer height={400}>
          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis type="number" dataKey="number" name="number of events" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
