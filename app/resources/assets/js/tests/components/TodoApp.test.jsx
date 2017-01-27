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
	      completed: false,
	      created_at: 0,
	      completed_at: undefined
	    };
	    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
	    todoApp.setState({todos: [todoData]});

	    expect(todoApp.state.todos[0].completed).toBe(false);
	    todoApp.toggle(11);
	    expect(todoApp.state.todos[0].completed).toBe(true);

	    expect(todoApp.state.todos[0].created_at).toBeA('number');
		expect(todoApp.state.todos[0].created_at).toBeA('number');
	});

	it('should remove completed at state when toggle todo to not completed', () =>
	{
		var todoData = {
			id: 1,
			text: 'new todo',
			completed: true,
			created_at: 0,
			completed_at: 1234
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.toggle(1);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completed_at).toNotExist();
	});
});