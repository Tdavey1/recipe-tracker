import React from 'react';
import Checkbox from './Checkbox';

class Step extends React.Component {

  state = {
    completed: false,
  }

  toggleComplete = () => {
    this.setState({ completed: !this.state.completed });
  }

  render() {
    return (
      <div className={"step" + (this.state.completed ? " completed-item" : "")}>
        <Checkbox editing={this.props.editing} toggleComplete={this.toggleComplete} />
        <span onClick={() => this.props.removeStep(this.props.index)} className={"minus-button" + (!this.props.editing ? " hide" : "")}></span>
        <p className="step-index">{this.props.index + 1}</p>
        <div onChange={({ target }) => this.props.editStep(this.props.index, target.value)} contentEditable={this.props.editing} suppressContentEditableWarning placeholder="Enter your instruction!" className="step-instruction">
          {this.props.instruction}
        </div>
      </div>
    )
  }
}

export default Step;
