import React from 'react';
import { Route, Link } from 'react-router-dom'
import RecipeListItem from '../recipe-list-item';
import Recipe from '../recipe';
import recipesJSON from '../../data/recipes.json'

class RecipeList extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: recipesJSON.recipes
    };
  }

  render() {
    return (
        <ul className="recipe-list">
          {
            this.state.recipes.map((recipe, key) => {
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
