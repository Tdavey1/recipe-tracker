import React from 'react';

class Step extends React.Component {

  state = {
    completed: false,
  }

  toggleComplete = () => {
    this.setState({ completed: !this.state.completed });
  }

  render() {
    return (
      <div onClick={this.toggleComplete} className={"step " + (this.state.completed ? " completed-item" : "")}>
        <p className="step-index">{this.props.index + 1}</p>
        <div contentEditable suppressContentEditableWarning placeholder="Enter your instruction!" type="text" onChange={({ target }) => this.props.editStep(this.props.index, target.value)} className="step-instruction">
          {this.props.instruction}
        </div>
      </div>
    )
  }
}

export default Step;
