import React, {Component} from 'react';
import './App.css';
import EventList from "./EventList";
import NumberOfEvents from './NumberOfEvents';
import CitySearch from "./CitySearch";
import {getEvents} from './api';
import {OfflineAlert} from './components/Alert';

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
    window.addEventListener('online', this.offLineAlert());
  }

  offLineAlert = () => {
    if(navigator.onLine === false) {
      this.setState({
        offlineText: 'You appear to be offline, this list is cached. Please connect to the internet for an updated list.'
      });
    } else {
      this.setState({
        offlineText: '',
      });
    }
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events => {
        this.setState({events, lat, lon})
      })
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events => {
        this.setState({events, page})
      })

    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events => this.setState({events}));
    }

  }

  render() {
    return (
      <div className="App">
        <OfflineAlert text={this.state.offlineText} />
        <CitySearch updateEvents={this.updateEvents}/>
        <NumberOfEvents updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/> 
      </div>
    );
  }
}

export default App;
