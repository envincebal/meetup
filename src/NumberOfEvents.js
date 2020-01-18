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
    const {numberInput} = this.state;
    this.setState({numberInput: number});
    this.props.updateEvents(null, null, number);

    if (numberInput <= 0) {
      this.setState({
        infoText: "Number should be at least 1"
      });
    }else if (numberInput > 32){
      this.setState({
        infoText: "Number should be 32 or less"
      });
    } else {
      this.setState({
        infoText: ""
      });
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