var React = require('react');
var {connect} = require('react-redux');

import Todo from 'Todo';

var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
	render: function () {
		console.log('Props', this.props);
		var {todos, isChecked, searchText} = this.props;

		var renderTodos = () => {

			if(todos.length === 0) {
				return (
				    <h5>You have nothing to do right now </h5>
				);
			}

			return TodoAPI.filterTodos(todos, isChecked, searchText).map((todo) => {
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

// export module and connect component todo list
export default connect((state) => {
	return {
		...state,
		hello: 'Hello from connect'
	};
})(TodoList);