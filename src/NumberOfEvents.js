import React, {Component} from 'react';

class NumberOfEvents extends Component {
  constructor(props){
    super(props);

    this.state = {
      numberInput: 32
    }
  }

  handleInputChanged = (event) => {
    const number = event.target.value;
    this.setState({numberInput: number});
    this.props.updateEvents(null, null, number);
  }

  render(){
    return (
      <div className="number-of-events">
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