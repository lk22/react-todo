var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var TodoApp = require('TodoApp');

describe('TodoApp, </TodoApp>', () =>
{
	it('should exist', () =>
	{
		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on AddTodo', () =>
	{
		var todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: []});
		todoApp.addTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

	it('should toggle completed todos', () =>
	{
		var todoData = {
	      id: 11,
	      text: 'Test features',
	      completed: false
	    };
	    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
	    todoApp.setState({todos: [todoData]});

	    expect(todoApp.state.todos[0].completed).toBe(false);
	    todoApp.toggle(11);
	    expect(todoApp.state.todos[0].completed).toBe(true);

	});
});