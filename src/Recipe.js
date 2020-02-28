import React from 'react';
import RecipeInfo from './RecipeInfo';
import RecipeIngredients from './RecipeIngredients';
import RecipeSteps from './RecipeSteps';

class Recipe extends React.Component {

  state = {
    info: {
      prepTime: 15,
      cookingTime: 45,
      servingSize: 3,
      title: "Apple Sandwich",
      description: "this is a descriptions",
    },
    ingredients: [
      { amount: 1 / 2, unit: null, item: "onion" },
      { amount: 3, unit: "tablespoons", item: "pancakes" },
      { amount: 1, unit: null, item: "zucchini" },
    ],
    steps: [
      { key: 1, instruction: "i'm a carrot and i am orange, but i am not an orange because that's a fruit. I grow in the dirt and then when people want to eat me, they pull me out of the ground. I think i am the beset vegeetable" },
      { key: 2, instruction: "some step" },
      { key: 3, instruction: "some other step" },
      { key: 4, instruction: "some last step" },
    ],
  }

  addIngredient = (item, amount, unit) => {
    const ingredients = this.state.ingredients.slice();
    ingredients.push({ unit: unit, amount: amount, item: item })
    this.setState({ ingredients: ingredients })
  }

  removeIngredient = (index) => {
    const ingredients =
      this.state.ingredients
        .slice()
        .filter((_, i) => i !== index)
    this.setState({ ingredients: ingredients });
  }

  addStep = (i) => {
    const steps = this.state.steps.slice();
    steps.splice(i, 0, { instruction: "" });
    this.setState({ steps: steps });
  }

  editStep = (i, text) => {
    const steps = this.state.steps;
    steps[i].instruction = text;
    this.setState({ steps: steps });
  }

  removeStep = (i) => {
    const steps = this.state.steps;
    steps.splice(i, 1);
    this.setState({ steps: steps });
  }

  componentDidMount() {
    const recipeID = this.props.match.params.recipeID
  }

  render() {
    return (
      <div className="recipe">
        <RecipeInfo info={this.state.info} />
        <RecipeIngredients addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} ingredients={this.state.ingredients} />
        <RecipeSteps addStep={this.addStep} editStep={this.editStep} removeStep={this.removeStep} steps={this.state.steps} />
      </div>
    )
  }
}

export default Recipe;
