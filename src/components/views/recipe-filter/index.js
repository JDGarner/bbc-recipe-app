import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export default class RecipeFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      selectValue: null,
      checkBoxChecked: false
    };

    this.maxCookingTimeOptions = [
      { value: Number.POSITIVE_INFINITY, label: 'Maximum Cooking Time' },
      { value: 10, label: '10 Minutes' },
      { value: 20, label: '20 Minutes' },
      { value: 30, label: '30 Minutes' },
      { value: 40, label: '40 Minutes' }
    ];
  }

  onChangeFilterString(event) {
    this.props.updateFilterString(event.target.value);
  }

  onChangeMaxCookingTime(select) {
    this.setState({
      selectValue: select
    });
    this.props.updateMaxCookingTime(select.value);
  }

  onChangeShowStarred() {
    this.setState({
      checkBoxChecked: !this.state.checkBoxChecked
    });
    this.props.updateShowStarred(!this.state.checkBoxChecked);
  }

  render() {
    return (
      <div className="recipe-filter">
        <input
          type="text"
          onChange={this.onChangeFilterString.bind(this)}
          placeholder="Search for Recipes" />
        <Select
          clearable={false}
          value={this.state.selectValue}
          options={this.maxCookingTimeOptions}
          onChange={this.onChangeMaxCookingTime.bind(this)}
          placeholder="Maximum Cooking Time" />
        <label>
          Show Favourite Recipes:
          <input
            type="checkbox"
            value={this.state.checkBoxChecked}
            checked={this.state.checkBoxChecked}
            onChange={this.onChangeShowStarred.bind(this)} />
        </label>
      </div>
    );
  }
}
