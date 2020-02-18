import React from 'react';
import Step from './Step.js'

class RecipeSteps extends React.Component {
  state = {
    steps: [
      { key: 1, instruction: "i'm a carrot and i am orange, but i am not an orange because that's a vegetable. I grow in the dirt and then when people want to eat me, they pull me out of the ground. I think i am the beset vegeetable" },
      { key: 2, instruction: "some step" },
      { key: 3, instruction: "some other step" },
      { key: 4, instruction: "some last step" },
    ],
    items: 4
  }

  processAdd = (i) => {
    const steps = this.state.steps.slice();
    const key = this.state.items + 1;
    steps.splice(i, 0, { key: key, instruction: "" })
    this.setState({ key: key, steps: steps });
  }

  editStep = (i, text) => {
    const steps = this.state.steps;
    steps[i].instruction = text;
    this.setState({ steps: steps });
  }

  render() {
    return (
      <div className="steps-container">
        <h2 className="subtitle">Steps</h2>
        {this.state.steps.map((step, i) =>
          <React.Fragment key={step.key}>
            <span onClick={() => this.processAdd(i)} className="plus-button"></span>
            <div className="connector"></div>
            <Step key={step.key} index={i} instruction={step.instruction} editStep={this.editStep} />
            <div className="connector"></div>
          </React.Fragment>
        )}
        <span onClick={() => this.processAdd(this.state.steps.length)} className="plus-button"></span>
      </div>
    )

  }
}

export default RecipeSteps;
