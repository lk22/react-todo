var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
	render: function () {
		var {todos} = this.props;

		var renderTodos = () => {

			if(todos.length === 0) {
				return (
				    <h5>You have nothing to do right now </h5>
				);
			}

			return todos.map((todo) => {
				return ( <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} /> );
			});
		};
		return (
			<div id="todo-list">
				{renderTodos()}
			</div>
		);
	}
});

module.exports = TodoList;