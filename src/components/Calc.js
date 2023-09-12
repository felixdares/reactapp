import React from "react";
import "../style/style.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: "" }; // initializing state as null
  }

  Calculate = (event) => {
    let finalValue = [];
    for (var i = 1; i <= event.target.value; i++) {
      finalValue.push(i); //push the values to array with comma
    }
    this.setState({ total: finalValue }); // Newly calculated values set in state
  };
  render() {
    return (
      <div className="container">
        <label>Max Number to Print</label>
        <input onChange={this.Calculate} />
        <input readonly value={this.state.total} />
      </div>
    );
  }
}

export default Calc;
