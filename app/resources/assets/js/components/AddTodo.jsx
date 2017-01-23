var React = require('react');

var AddTodo = React.createClass({

	createTodo: function(e) {
		e.preventDefault();

		var text = this.refs.text.value;

		if(text && text.length > 1) {
			this.refs.text.value = '';

			this.props.addTodo(text);
		} else {
			this.refs.text.focus();
		}

	},

	render: function() {
		return (
			<div id="add-todo">
				<form onSubmit={this.createTodo}>
					<input type="text" ref="text"/>
					<button type="submit">Create</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;