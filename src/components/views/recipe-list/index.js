import React from 'react'
import RecipeListItem from '../recipe-list-item'
import PageButtons from '../page-buttons'
import Paginator from '../../paginator'

export default class RecipeList extends React.Component {

  getCurrentPageRecipes() {
    return Paginator.getCurrentPageItems(
      this.props.recipes,
      this.props.currentPage,
      this.props.pageSize
    )
  }

  isMultiplePages() {
    return Paginator.isMultiplePages(this.props.recipes, this.props.pageSize)
  }

  isFirstPage() {
    return Paginator.isFirstPage(
      this.props.recipes,
      this.props.currentPage,
      this.props.pageSize
    )
  }

  isLastPage() {
    return Paginator.isLastPage(
      this.props.recipes,
      this.props.currentPage,
      this.props.pageSize
    )
  }

  render() {
    if (this.props.recipes.length > 0) {
      return this.renderRecipes()
    } else {
      return this.renderNoMatchMessage()
    }
  }

  renderRecipes() {
    return (
      <div className="recipe-list-content">
        <ul className="recipe-list"> {
          this.getCurrentPageRecipes().map((recipe, key) => {
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
          goToNextPage={this.props.goToNextPage}
          isFirstPage={this.isFirstPage()}
          isLastPage={this.isLastPage()} />
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
