import React from 'react';

const conversions = {
  tablespoons: [
    { unit: "cups", forumla: 1 / 16 },
    { unit: "teaspoons", forumla: 3 },
    { unit: "fl oz", forumla: 0.5 },
    { unit: "ml", forumla: 14.787 }

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
      <div className={"ingredient" + (this.state.completed ? " completed-item" : "")} onClick={this.toggleComplete}>
        <span onClick={() => this.props.onClick(this.props.index)} className="minus-button"></span>
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
