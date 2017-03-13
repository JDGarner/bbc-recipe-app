import React from 'react'

export default class PageButtons extends React.Component {

  render() {
    return (
      <div className="page-buttons">
        { this.renderNextPageButton() }
        { this.renderPreviousPageButton() }
      </div>
    );
  }

  renderNextPageButton() {
    if (!this.props.isLastPage) {
      return (
        <span onClick={this.props.goToNextPage}>Next Page</span>
      );
    } else {
      return null;
    }
  }

  renderPreviousPageButton() {
    if (!this.props.isFirstPage) {
      return (
        <span onClick={this.props.goToPreviousPage}>Previous Page</span>
      );
    } else {
      return null;
    }
  }
}
