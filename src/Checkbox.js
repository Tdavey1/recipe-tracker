import React from 'react';
import './checkbox.css';

class Checkbox extends React.Component {
  render() {
    return (
      <label className={"checkbox-container" + (this.props.editing ? " hide" : "")}>
        <input onClick={this.props.toggleComplete} className="hidden-input" type="checkbox" />
        <svg viewBox="0 0 25 25" className="checkbox">
          <path className="checkmark" d="M10 13l2 2 5-5"></path>
          <rect className="todo__box" x="5" y="5" rx="3" width="15" height="15" />
        </svg>
      </label>
    )
  }
}

export default Checkbox;
