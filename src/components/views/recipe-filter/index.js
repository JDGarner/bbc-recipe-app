import React from 'react'

export default class RecipeFilter extends React.Component {

  onFilterChange(event) {
    this.props.filterRecipes(event.target.value);
  }

  render() {
    return (
      <div className="recipe-filter">
        <input
          type="text"
          onChange={this.onFilterChange.bind(this)}
          placeholder="Search for Recipes" />
      </div>
    );
  }
}