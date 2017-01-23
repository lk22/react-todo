var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList, </TodoList>', () =>
{
	it('should exist', () =>
	{
		expect(TodoList).toExist();
	});

	it('should render on todo component for each todo item', () =>
	{
		var todos = [
			{
				id: 1,
				text: 'something'
			},
			{
				id: 2,
				text: 'something else'
			}
		];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		var todoComponents = TestUtils.scryRenderedComponentsWithType(TodoList, Todo);

		expect(todoComponents.length).toBe(todos.length);
	});
});