var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({

	render: function() {
		return (
		    <div id="app" className="container">
		    	<TodoSearch />
		    	<TodoList />
		    	<hr/>
		    	<AddTodo />
		    </div>
		);
	}
});

module.exports = TodoApp;