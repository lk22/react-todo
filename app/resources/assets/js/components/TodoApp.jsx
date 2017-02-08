var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

// Todo API
var TodoAPI = require('../../../../api/TodoAPI.jsx');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

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
		    	<TodoList/>
		    	<hr/>
		    	<AddTodo addTodo={this.addTodo} />
		    </div>
		);
	}
});

module.exports = TodoApp;