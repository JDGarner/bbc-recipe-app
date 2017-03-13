import React from 'react'
import { Link } from 'react-router-dom'

export default class RecipeListItem extends React.Component {

  render() {
    return (
      <li className="recipe-list-item">
        <Link to={`/recipe/${this.props.recipe.id}`}>
          <h3>Name: {this.props.recipe.name}</h3>
          <h3>Cooking Time: {this.props.recipe.cookingtime}</h3>
          <h3>Main Ingredients: {this.props.recipe.mainingredients}</h3>
        </Link>
      </li>
    );
  }
}
