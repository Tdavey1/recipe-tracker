import React from 'react';
import Step from './Step.js'
import SlidingToggle from "./SlidingToggle.js"

class RecipeSteps extends React.Component {
  state = {
    editing: false
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    return (
      <div className="steps-container">
        <div className="section-title-container">
          <h2 className="subtitle">Steps</h2>
          <SlidingToggle toggleEdit={this.toggleEdit} />
        </div>
        {this.props.steps.map((step, i) =>
          <React.Fragment key={step.key}>
            <span onClick={() => this.props.addStep(i)} className={"plus-button" + (!this.state.editing ? " hide" : "")}></span>
            <Step editing={this.state.editing} key={step.instruction} index={i} instruction={step.instruction} editStep={this.props.editStep} removeStep={this.props.removeStep} />
          </React.Fragment>
        )}
        <span onClick={() => this.props.addStep(this.props.steps.length)} className={"plus-button" + (!this.state.editing ? " hide" : "")}></span>
      </div>
    )
  }
}

export default RecipeSteps;
