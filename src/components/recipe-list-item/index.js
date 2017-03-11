import React from 'react';

class RecipeListItem extends React.Component {

  render() {
    return (
      <li>
        {this.props.recipe.name}
      </li>
    );
  }
}

export default RecipeListItem;
