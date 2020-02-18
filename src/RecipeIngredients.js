import React from 'react';
import Ingredient from "./Ingredient.js"
import AddIngredient from "./AddIngredient.js"

class RecipeInfo extends React.Component {
  state = {
    ingredients: [
      { amount: 1 / 2, unit: null, item: "onion" },
      { amount: 100, unit: "tablespoons", item: "pancakes" },
      { amount: 1, unit: null, item: "zucchini" },
    ]
  }

  handleAddIngredient = (item, amount, unit) => {
    console.log("handle eadd")
    const ingredients = this.state.ingredients.slice();
    ingredients.push({ item: item, unit: unit, amount: amount })
    this.setState({ ingredients: ingredients })
  }

  handleRemoveIngredient = (index) => {
    const ingredients =
      this.state.ingredients
        .slice()
        .filter((_, i) => i !== index)
    this.setState({ ingredients: ingredients })
  }

  render() {
    return (
      <div className="ingredient-container">
        <h2 className="subtitle">Ingredients</h2>
        {this.state.ingredients.map((ingredient, i) =>
          <Ingredient
            index={i}
            key={ingredient.item}
            amount={ingredient.amount}
            unit={ingredient.unit}
            item={ingredient.item}
            onClick={this.handleRemoveIngredient}
          />
        )}

        <AddIngredient onClick={this.handleAddIngredient} />
      </div>
    )

  }
}

export default RecipeInfo;
