import React from 'react';
import Checkbox from './Checkbox';

const conversions = {
  tablespoons: [
    { unit: "cups", forumla: 1 / 16 },
    { unit: "teaspoons", forumla: 3 },
    { unit: "ml", forumla: 14.787 }
  ],
  teaspoons: [
    { unit: "cups", forumla: 1 / 16 },
    { unit: "tablespoons", forumla: 1 / 3 },
    { unit: "ml", forumla: 4.929 }
  ],
  cups: [
    { unit: "tablespoons", forumla: 16 },
    { unit: "teaspoons", forumla: 48 },
    { unit: "ml", forumla: 237 }
  ],
  ml: [
    { unit: "tablespoons", forumla: 1 / 14.787 },
    { unit: "teaspoons", forumla: 1 / 4.929 },
    { unit: "cups", forumla: 1 / 237 }
  ]
}

class Ingredient extends React.Component {

  constructor(props) {
    super(props);
    let message = this.makeConversion(props.unit, props.amount);
    this.state = {
      completed: false,
      hovering: false,
      message: message
    }

  }

  makeConversion = (unit, amount) => {
    if (unit !== null) {
      return conversions[unit]
        .map((conversion) => {
          return amount * conversion.forumla + " " + conversion.unit
        })
        .join("\n")
    }
    return null;
  }


  toggleComplete = () => {
    this.setState({ completed: !this.state.completed });
  }

  toggleHover = () => {
    this.setState({ hovering: !this.state.hovering });
  }

  render() {
    return (
      <div className={"ingredient" + (this.state.completed ? " completed-item" : "")}>
        <Checkbox editing={this.props.editing} toggleComplete={this.toggleComplete} />

        <span onClick={() => this.props.removeIngredient(this.props.index)} className={"minus-button" + (!this.props.editing ? " hide" : "")}></span>
        {this.props.unit !== null &&
          <p className={"tooltip" + (this.state.hovering ? " show" : "")}>{this.state.message}</p>
        }
        <p className="ingredient-amount" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{this.props.amount + (this.props.unit !== null ? " " + this.props.unit : "")}</p>
        <p className="ingredient-item">{this.props.item}</p>
      </div>
    )
  }
}

export default Ingredient;
