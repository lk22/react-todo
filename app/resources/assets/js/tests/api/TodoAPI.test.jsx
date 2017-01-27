var expect = require('expect');
var TodoAPI = require('../../../../../api/TodoAPI.jsx');

describe('Todo API test suite', () =>
{
	// clear out local storage data for each test
	beforeEach(() =>
	{
		localStorage.removeItem('todos');
	});

	it('should exist', () =>
	{
		expect(TodoAPI).toExist();
	});

	describe('set todo', () =>
	{
		it('should insert new todo', () =>
		{
			var todos = [
				{
					id: 1,
					text: 'test',
					completed: false
				}
			];

			TodoAPI.setTodos(todos);

			var actual = JSON.parse(localStorage.getItem('todos'));

			expect(actual).toEqual(todos);
		});

		it('should return null if invalid todo is entered to insert', () =>
		{
			var todo = {a: 'b'};
			TodoAPI.setTodos(todo);
			expect(localStorage.getItem('todos')).toBe(null);
		});
	});

	describe('get todos', () =>
	{

		it('should get empty array if invalid local storage data exists', () =>
		{
			var actual = TodoAPI.getTodos();
			expect(actual).toEqual([]);
		});

		it('should get new valid todos from local storage', () =>
		{
			var todos = [
				{
					id: 1,
					text: 'test',
					completed: false
				},
				{
					id: 2,
					text: 'test2',
					completed: false
				},
				{
					id: 2,
					text: 'test2',
					completed: false
				}
			];

			localStorage.setItem('todos', JSON.stringify(todos));

			var actual = TodoAPI.getTodos();
			expect(actual).toEqual(todos);
		});
	});

	describe('filter todos', () =>
	{
		var todos = [
			{
				id: 1,
				text: 'some text',
				completed: true
			},
			{
				id: 2,
				text: 'some text 2',
				completed: false
			},
			{
				id: 3,
				text: 'some new text',
				completed: true
			}
		];

		it('should return all items if completed state is true', () =>
		{
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});

		it('should return items wich is not completed', () =>
		{
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		});

		it('should sort by completed todos', () =>
		{
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos[0].completed).toBe(false);
		});

		it('should filter by search text if value', () =>
		{
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
			expect(filteredTodos.length).toBe(3);
		});

		it('should return all todos if search text is empty', () =>
		{
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
	});
});