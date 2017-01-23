var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			isChecked: false,
			searchText: '',
			todos: [
				{
					id: 1,
					text: 'walk the dog'
				},
				{
					id: 2,
					text: 'clean the yard'
				},
				{
					id: 3,
					text: 'grab the paper'
				},
				{
					id: 4,
					text: 'do more code'
				}
			]
		};
	},

	addTodo: function(text) {
		alert('new todo: ' + text);
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
		    	<TodoList todos={todos}/>
		    	<hr/>
		    	<AddTodo addTodo={this.addTodo} />
		    </div>
		);
	}
});

module.exports = TodoApp;