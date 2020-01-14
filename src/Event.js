import React, {Component} from "react";

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    }
  }

  handleShowDetails = () => {
    if (!this.state.showDetails) {
      this.setState({showDetails: true});
    } else {
      this.setState({showDetails: false});
    }
  }

  render() {
    const {event} = this.props;
    return (
      <div className="event">
        <p>{event.local_time + " - " + event.local_date}</p>
        <p className="event-name">{event.name}</p>
        <p><span className="label">Group:</span> {event.group.name}</p>
        <p className="event-count"><span className="label">RSVP: </span>{event.yes_rsvp_count} people are going</p>
        <p className="event-address"><span className="label">Address: </span>{ event.venue && event.venue.address_1 + ', ' + event.venue &&  event.venue.city + ', ' +  event.venue && event.venue.localized_country_name}</p>
        <p className="event-venue"><span className="label">Venue: </span>{event.venue && event.venue.name}</p>
        {this.state.showDetails && (
          <div className="event-details">
            <hr/>
            <p className="event-description" dangerouslySetInnerHTML={{__html: event.description}}></p>
            <a className="event-link" href={event.link}>Event Page</a>
            <hr/>
          </div>
        )}
        <button onClick={this.handleShowDetails} className="show-details">Details</button>
      </div>
    );
  }
}

export default Event;