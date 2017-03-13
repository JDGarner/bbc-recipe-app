import React from 'react'

export default class PageButtons extends React.Component {

  render() {
    return (
      <div className="page-buttons">
        <span onClick={this.props.goToPreviousPage}>Previous Page</span>
        <span onClick={this.props.goToNextPage}>Next Page</span>
      </div>
    );
  }
}
