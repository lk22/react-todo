var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var TodoSearch = require('TodoSearch');

describe('TodoSearch component', () =>
{
	it('should exist', () =>
	{
		expect(TodoSearch).toExist();
	});

	it('should search with entered input text', () =>
	{
		var searchText = 'Dog';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

		todoSearch.refs.search.value = searchText;

		TestUtils.Simulate.change(todoSearch.refs.search);

		expect(spy).toHaveBeenCalledWith(false, 'Dog');
	});

	it('should call onSeach with proper checked value', () =>
	{
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

		todoSearch.refs.check.checked = true;

		TestUtils.Simulate.change(todoSearch.refs.check);

		expect(spy).toHaveBeenCalledWith(true, '');
	});
});