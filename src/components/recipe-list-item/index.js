import React from 'react'
import { Link } from 'react-router-dom'

class RecipeListItem extends React.Component {

  render() {
    return (
      <li>
        <Link to={`/recipe/${this.props.recipe.id}`}>
          {this.props.recipe.name}
        </Link>
      </li>
    );
  }
}

export default RecipeListItem;
