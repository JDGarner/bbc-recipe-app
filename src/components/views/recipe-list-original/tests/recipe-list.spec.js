import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RecipeList from '../index';

describe('<RecipeList/>', function () {
  it('should render component', function () {

    const recipe = shallow(<RecipeList />);
    expect(recipe).to.exist;
  });

  it('display all recipes in recipe list', function () {
    // TO DO
  });

  it('display 10 recipes per page', function () {
    // TO DO
  });

  it('display message when no recipes are available', function () {
    // TO DO
  });
});
