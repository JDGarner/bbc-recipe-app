import React from 'react'

export default class RecipeStar extends React.Component {
  constructor(props) {
    super(props);
    let starredRecipes = localStorage.getItem('starredRecipes') || [];

    this.state = {
      active: starredRecipes.includes(this.props.recipeId)
    };
  }

  onClickStar() {
    this.setState({
      active: !this.state.active
    });
    this.toggleStarRecipe();
  }

  toggleStarRecipe() {
    let starredRecipes = JSON.parse(localStorage.getItem('starredRecipes')) || [];
    let id = this.props.recipeId;

    if (starredRecipes.includes(id)) {
      starredRecipes.splice(starredRecipes.indexOf(id), 1);
    } else {
      starredRecipes.push(id);
    }

    localStorage.setItem('starredRecipes', JSON.stringify(starredRecipes));
  }

  render() {
    let textContent = this.state.active ?
      'Remove from Favourite List' : 'Add to Favourite List';

    return (
      <div
        className="star"
        onClick={this.onClickStar.bind(this)}>
        {textContent}
      </div>
    );
  }
}
