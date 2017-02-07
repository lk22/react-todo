var React = require('react');
var {connect} = require('react-redux');

import Todo from 'Todo';

export var TodoList = React.createClass({
	render: function () {
		var {todos} = this.props;

		var renderTodos = () => {

			if(todos.length === 0) {
				return (
				    <h5>You have nothing to do right now </h5>
				);
			}

			return todos.map((todo) => {
				return ( <Todo key={todo.id} {...todo} /> );
			});
		};
		return (
			<div id="todo-list">
				{renderTodos()}
			</div>
		);
	}
});

// export module and connect component tod
export default connect((state) => {
	return {
		todos: state.todos
	};
})(TodoList);