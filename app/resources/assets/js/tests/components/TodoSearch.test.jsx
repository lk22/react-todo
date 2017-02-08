var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch component', () =>
{
	it('should exist', () =>
	{
		expect(TodoSearch).toExist();
	});

	it('should dispatch SET_SEARCH_TEXT on input change', () =>
	{
		var searchText = 'Dog';
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText
		};
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

		todoSearch.refs.search.value = searchText;

		TestUtils.Simulate.change(todoSearch.refs.search);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should dispatch TOGGLE_COMPLETED when checkbox is checked', () =>
	{
		var action = {
			type: 'TOGGLE_COMPLETED'
		};
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

		todoSearch.refs.check.checked = true;

		TestUtils.Simulate.change(todoSearch.refs.check);

		expect(spy).toHaveBeenCalledWith(action);
	});
});