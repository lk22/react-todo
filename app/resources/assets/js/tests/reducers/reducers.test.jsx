var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('Reducers');

describe('Reducers', () =>
{
  	describe('searchTextReducer', () =>
  	{
    	it('should set searchText', () =>
    	{
      		var action = {
       			type: 'SET_SEARCH_TEXT',
        		searchText: 'dog'
      		};
      		var res = reducers.searchTextReducer(df(''), df(action));

      		expect(res).toEqual(action.searchText);
    	});
  });

	describe('showCompletedReducer', () =>
	{
		it('should toggle showCompleted', () =>
		{
		  var action = {
		    type: 'TOGGLE_SHOW_COMPLETED'
		  };
		  var res = reducers.showCompletedReducer(df(false), df(action));

		  expect(res).toEqual(true);
		});
	});

	describe('todosReducer', () =>
	{
		it('should add new todo', () =>
		{
			var action = {
				type: 'ADD_TODO',
				text: 'walk the dog'
			};

			var response = reducers.todosReducer(df([]), df(action));

			expect(response.length).toEqual(1);
			expect(response[0].text).toEqual(action.text);
		});

		it('should generate existing todos', () =>
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

			var response = reducers.todosReducer(df([]), df(action));

			expect(response.length).toEqual(1);
			expect(response[0]).toEqual(todos[0]);
		})

		it('should toggle todo', () =>
		{


			var todos = [{
		        id: '123',
		        text: 'Something',
		        completed: true,
		        created_at: 123,
		        completed_at: 125
		    }];

			var action = {
	        	type: 'TOGGLE_TODO',
	        	id: '123'
	     	};

			var response = reducers.todosReducer(df(todos), df(action));

			expect(response[0].completed).toEqual(false);
			expect(response[0].completed_at).toEqual(undefined);
		});
	});
});
