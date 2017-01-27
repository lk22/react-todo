var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

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
					completed:false,
					created_at: moment.unix(),
					completed_at: undefined
				}
			]
		});
	},

	toggle: function (id) {
		var updatedTodos = this.state.todos.map( (todo) => {
			if(todo.id === id){
				todo.completed = !todo.completed; // ! sets it to opposite value
				todo.completed_at = todo.completed ? moment.unix : undefined;
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
		var {todos, isChecked, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, isChecked, searchText);
		return (
		    <div id="app" className="container">
		    	<TodoSearch onSearch={this.handleSearch} />
		    	<TodoList todos={filteredTodos} onToggle={this.toggle}/>
		    	<hr/>
		    	<AddTodo addTodo={this.addTodo} />
		    </div>
		);
	}
});

module.exports = TodoApp;