import React from 'react';
import './App.css';
import './navbar.css';
import RecipeInfo from './RecipeInfo';
import RecipeIngredients from './RecipeIngredients';
import RecipeSteps from './RecipeSteps';

class Recipe extends React.Component {
  render() {
    return (
      <div className="recipe">
        <RecipeInfo />
        <RecipeIngredients />
        <RecipeSteps />
      </div>
    )
  }
}

export default Recipe;
