import React from 'react'
import RecipeListItem from '../recipe-list-item'
import PageButtons from '../page-buttons'

export default class RecipeList extends React.Component {

  getCurrentPageRecipes(recipes, pageNumber) {
    return recipes.slice(
      pageNumber * this.props.pageSize,
      pageNumber * this.props.pageSize + this.props.pageSize
    );
  }

  isMultiplePages() {
    return this.props.recipes.length > this.props.pageSize
  }

  render() {
    if (this.props.recipes.length > 0) {
      return this.renderRecipes()
    } else {
      return this.renderNoMatchMessage()
    }
  }

  renderRecipes() {
    let currentPageRecipes =
      this.getCurrentPageRecipes(this.props.recipes, this.props.currentPage);

    return (
      <div className="recipe-list-content">
        <ul className="recipe-list"> {
          currentPageRecipes.map((recipe, key) => {
            return (
              <RecipeListItem recipe={recipe} key={key} />
            );
          })
        } </ul>
      { this.renderPageButtons() }
      </div>
    );
  }

  renderPageButtons() {
    if (this.isMultiplePages()) {
      return (
        <PageButtons
          goToPreviousPage={this.props.goToPreviousPage}
          goToNextPage={this.props.goToNextPage} />
      );
    } else {
      return null;
    }
  }

  renderNoMatchMessage() {
    return (
      <div>Sorry, nothing matched your filter term</div>
    );
  }
}
