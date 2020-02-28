import React from 'react';
import './slidingToggle.css';

class SlidingToggle extends React.Component {

  state = {
    active: false
  }

  clickToggle = () => {
    this.setState({ active: !this.state.active })
    this.props.toggleEdit();
  }

  render() {
    return (
      <div className={"slider" + (this.state.active ? " active-toggle" : "")} onClick={this.clickToggle}>
        <div className="slider-circle"></div>
        <p>{this.state.active ? "edit" : "view"}</p>
      </div>
    )

  }
}

export default SlidingToggle;
