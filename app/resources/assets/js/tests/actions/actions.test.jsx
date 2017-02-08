var expect = require('expect');
var actions = require('Actions');

describe('Actions', () =>
{
	it('should generate search text', () =>
	{
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		};

		var response = actions.setSearchText(action.searchText);
		expect(response).toEqual(action);
	});

	it('should generate add todo action', () =>
	{
		var action = {
			type: 'ADD_TODO',
			text: 'new todo'
		};

		var response = actions.addTodo(action.text);

		expect(response).toEqual(action);
	});

	it('should generate add todos action generator', () =>
	{
		var todos = [{
			id: '220',
			text: 'get new dog',
			completed: false,
			completed_at: undefined,
			created_at: 33000
		}];

		var action = {
			type: 'ADD_TODOS',
			todos: todos
		};

		var response = actions.addTodos(todos);

		expect(response).toEqual(action);
	});

	it('should generate toggle completed todos action', () =>
	{
		var action,
			response;

			action = {
				type: 'TOGGLE_COMPLETED'
			};

			response = actions.showToggleCompletedTodos();
			expect(response).toEqual(action);
	});

	it('should generate toggle todo action', () =>
	{
		var action,
			response;

			action = {
				type: 'TOGGLE_TODO',
				id: 1
			};

			response = actions.toggleTodo(action.id);

			expect(response).toEqual(action);
	});
});