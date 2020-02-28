import React from 'react';
import Ingredient from "./Ingredient.js"
import AddIngredient from "./AddIngredient.js"
import SlidingToggle from "./SlidingToggle.js"


class RecipeInfo extends React.Component {
  state = {
    ingredients: [
      { amount: 1 / 2, unit: null, item: "onion" },
      { amount: 3, unit: "tablespoons", item: "pancakes" },
      { amount: 1, unit: null, item: "zucchini" },
    ],
    editing: false
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  }

  render() {
    return (
      <div className="ingredient-container">
        <div className="section-title-container">
          <h2 className="subtitle">Ingredients</h2>
          <SlidingToggle toggleEdit={this.toggleEdit} />
        </div>
        {this.props.ingredients.map((ingredient, i) =>
          <Ingredient
            editing={this.state.editing}
            index={i}
            key={ingredient.item}
            amount={ingredient.amount}
            unit={ingredient.unit}
            item={ingredient.item}
            removeIngredient={this.props.removeIngredient}
          />
        )}

        <AddIngredient editing={this.state.editing} addIngredient={this.props.addIngredient} />
      </div>
    )

  }
}

export default RecipeInfo;
