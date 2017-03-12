import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RecipeFilter from '../index';

describe('<RecipeFilter/>', function () {
  it('should render component', function () {

    const recipe = shallow(<RecipeFilter />);
    expect(recipe).to.exist;
  });

  it('should filter recipe list by name', function () {
    // TO DO
  });

  it('should filter recipe list by ingredients', function () {
    // TO DO
  });

  it('should filter recipe list by cooking time', function () {
    // TO DO
  });

  it('should filter recipe list by starred recipes', function () {
    // TO DO
  });

  it('should display message if no recipe matches filter', function () {
    // TO DO
  });
});
