import React from "react";
import "../style/style.css";

class Areafinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", areacalculated: "" }; // initializing state as null
    this.FindArea = this.FindArea.bind(this);
  }

  FindArea = (event, field) => {
    let calculatedArea = ``;
    this.setState({ [field]: event.target.value });
    calculatedArea = this.state.height * this.state.width;
    this.setState({ areacalculated: calculatedArea });
  };
  render() {
    return (
      <div className="container">
        <p>
          <label>Height</label>
          <label className="right">Width</label>
        </p>
        <p>
          <input
            className="inputs"
            name="height"
            onChange={(event) => this.FindArea(event, "height")}
          />
          <input
            className="inputs"
            name="width"
            onChange={(event) => this.FindArea(event, "width")}
          />
        </p>
        <p>Calculated Area will get displayed below</p>
        <input readonly value={this.state.areacalculated} />
      </div>
    );
  }
}

export default Areafinder;
