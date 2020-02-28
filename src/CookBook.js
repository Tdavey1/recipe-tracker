import React from 'react';
import './cookBook.css';
import {
  Link
} from "react-router-dom";

class Preview extends React.Component {
  render() {
    return (
      <Link to={`/recipe/${this.props.id}`} className="preview-container">
        <img className="preview-image" alt="recipe" src={this.props.img} />
        <p className="preview-name">{this.props.name}</p>
      </Link>
    )
  }
}

class CookBook extends React.Component {
  state = {
    recipes: [
      { id: 1, name: "plop", img: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/2018_Avocado-and-Bacon-Grilled-Cheese_2644_600x600.jpg?ext=.jpg" },
      { id: 2, name: "plop", img: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/2018_Avocado-and-Bacon-Grilled-Cheese_2644_600x600.jpg?ext=.jpg" },
      { id: 3, name: "plop", img: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/2018_Avocado-and-Bacon-Grilled-Cheese_2644_600x600.jpg?ext=.jpg" },
      { id: 4, name: "plop", img: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/2018_Avocado-and-Bacon-Grilled-Cheese_2644_600x600.jpg?ext=.jpg" },
      { id: 5, name: "plop", img: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/2018_Avocado-and-Bacon-Grilled-Cheese_2644_600x600.jpg?ext=.jpg" }
    ]
  }

  render() {
    return (
      <div className="cookbook">
        {this.state.recipes.map(recipe =>
          <Preview key={recipe.id} name={recipe.name} img={recipe.img} id={recipe.id} />
        )}
      </div>
    )
  }
}

export default CookBook;
