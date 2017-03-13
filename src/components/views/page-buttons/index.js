import React from 'react'

export default class PageButtons extends React.Component {

  render() {
    return (
      <div className="page-buttons">
        { this.renderPreviousPageButton() }
        { this.renderNextPageButton() }
      </div>
    );
  }

  renderNextPageButton() {
    return (
      <button
        onClick={this.props.goToNextPage}
        disabled={this.props.isLastPage}>
        Next Page
      </button>
    );
  }

  renderPreviousPageButton() {
    return (
      <button
        onClick={this.props.goToPreviousPage}
        disabled={this.props.isFirstPage}>
        Previous Page
      </button>
    );
  }
}
