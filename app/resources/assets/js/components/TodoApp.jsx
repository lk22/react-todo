var React = require('react');
var uuid = require('node-uuid');

// Todo API
var TodoAPI = require('../../../../api/TodoAPI.jsx');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			isChecked: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		};
	},

	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},

	addTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed:false
				}
			]
		});
	},

	toggle: function (id) {
		var updatedTodos = this.state.todos.map( (todo) => {
			if(todo.id === id){
				todo.completed = !todo.completed; // ! sets it to opposite value
			}
			return todo;
		});

		this.setState({todos: updatedTodos});
	},

	handleSearch: function(check, search) {
		this.setState({
			isChecked: check,
			searchText: search.toLowerCase()
		});
	},

	render: function() {
		var {todos} = this.state;
		return (
		    <div id="app">
		    	<TodoSearch onSearch={this.handleSearch} />
		    	<TodoList todos={todos} onToggle={this.toggle}/>
		    	<hr/>
		    	<AddTodo addTodo={this.addTodo} />
		    </div>
		);
	}
});

module.exports = TodoApp;