var $ = require('jQuery');
module.exports = {
	setTodos: function(todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},

	getTodos: function() {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (err) {
			// catch error
		}

		return $.isArray(todos) ? todos : [];
	},

	filterTodos: function(todos, isChecked, searchText) {
		var filteredTodos = todos;

		// filter by completed
		filteredTodos = filteredTodos.filter((todo) =>
		{
			return !todo.completed || isChecked;
		});

		// filter by search text
		filteredTodos = filteredTodos.filter((todo) =>
		{
			var text = todo.text.toLowerCase();
			return searchText.length === 0 || todo.text.indexOf(searchText) > -1;
		});

		// sort by completed or not
		filteredTodos.sort((a, b) =>
		{

			if(!a.completed && b.completed)
			{
				return -1;
			}
			else if (a.completed && !b.completed)
			{
				return 1;
			}
			else
			{
				return 0;
			}

		});

		return filteredTodos;
	}
}