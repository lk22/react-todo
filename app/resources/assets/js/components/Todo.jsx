var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
import TodoList from 'TodoList';
var actions = require('Actions');

export var Todo = React.createClass({
	render: function() {
		var {id, text, completed, created_at, completed_at, dispatch} = this.props;
		var todoClassName = completed ? 'todo completed' : 'todo';
		var renderDate = () => {
			var message = ' Created at ';
			var timestamp = created_at;

			if(completed){
				message = 'Completed at ';
				timestamp = completed_at;
			}

			return message + moment.unix(timestamp).format('DDDo MMMM YYYY, h:mm:ss A');
		};

		return (
			<div id="todo" onClick={() => { dispatch(actions.toggleTodo(id)) }}>
				<input className="form-control" type="checkbox" checked={completed}/>
				<p className={todoClassName}>{text}</p>
				{renderDate()}
			</div>
		);
	}
});

export default connect()(Todo);