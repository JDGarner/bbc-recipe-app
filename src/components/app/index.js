import React from 'react';
import RecipeList from '../recipe-list';
import recipesJSON from '../../data/recipes.json'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      recipes: recipesJSON.recipes
    };
  }

  render() {
    return (
      <RecipeList recipes={this.state.recipes} />
    );
  }
}

export default App;
