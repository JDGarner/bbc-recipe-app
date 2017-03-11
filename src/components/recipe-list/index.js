import React from 'react';
import RecipeListItem from '../recipe-list-item';

class RecipeList extends React.Component {

  render() {
    return (
      <ul className="recipe-list">
        {
          this.props.recipes.map((recipe, key) => {
            return (
              <RecipeListItem recipe={recipe} key={key} />
            );
          })
        }
      </ul>
    );
  }
}

export default RecipeList;
