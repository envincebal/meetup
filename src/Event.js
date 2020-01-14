import React, {Component} from "react";

class Event extends Component{
  constructor(props){
    super(props);

    this.state = {
      showDetails: false
    }
  }

  handleShowDetails = () => {
    if(!this.state.showDetails){
      this.setState({ showDetails: true });
    }else{
      this.setState({showDetails: false});
    }
  }

  render(){
    const {event} = this.props;
    return (
      <div className="event">
        <p>{event.local_time + " - " + event.local_date}</p>
        <p className="event-name">{event.name}</p>
        <p>{"Group: " + event.group.name}</p>
        <p className="event-count">{event.yes_rsvp_count} people are going</p>
        
        <div className="event-details">

        </div>
        <button onClick={this.handleShowDetails} className="show-details">Details</button>
      </div>
    );
  }
}

export default Event;