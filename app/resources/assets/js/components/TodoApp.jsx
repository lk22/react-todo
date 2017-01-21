var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
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
	render: function() {
		var {todos} = this.state;


		return (
		    <div id="app">
		    	<TodoList todos={todos}/>
		    </div>
		);
	}
});

module.exports = TodoApp;