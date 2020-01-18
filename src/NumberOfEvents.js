import React, {Component} from 'react';
import {ErrorAlert} from "./Alert";

class NumberOfEvents extends Component {
  constructor(props){
    super(props);

    this.state = {
      numberInput: 32,
      infoText: ""
    }
  }

  handleInputChanged = (event) => {
    const number = event.target.value;

    this.setState({numberInput: number});

    if (number <= 0) {
      this.setState({
        infoText: "Number should be at least 1"
      });
    } else {
      this.setState({
        infoText: ""
      });
      this.props.updateEvents(null, null, number);
    }
  }

  render(){
    return (
      <div className="number-of-events">
        <ErrorAlert text={this.state.infoText} />
        <label>Number of Events</label>
        <input
        className="number" 
        type="number"
        value={this.state.numberInput}
        onChange={this.handleInputChanged} />
      </div>
    )
  }
}

export default NumberOfEvents;