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
      <h2 className="event-name">{event.name}</h2>
        <div className="event-details">

        </div>
        <button onClick={this.handleShowDetails} className="show-details">Details</button>
      </div>
    );
  }
}

export default Event;