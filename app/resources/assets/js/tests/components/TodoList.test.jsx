var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

// var Todo = require('Todo');
// var TodoList = require('TodoList');

import {configure} from 'store';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';


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
				text: 'something',
				completed: false,
				completed_at: undefined,
				created_at: 500
			},
			{
				id: 2,
				text: 'something else',
				completed: false,
				completed_at: undefined,
				created_at: 500
			}
		];

		var store = configure({
			todos
		});
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList />
			</Provider>
		);
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

		expect(todoComponents.length).toBe(todos.length);
	});
});