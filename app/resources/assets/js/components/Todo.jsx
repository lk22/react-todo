var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	render: function() {
		var {id, text, completed, created_at, completed_at} = this.props;

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
			<div id="todo" onClick={() => { this.props.onToggle(id); }}>
				<input type="checkbox" checked={completed}/>
				{text}
				{renderDate()}
			</div>
		);
	}
});

module.exports = Todo;