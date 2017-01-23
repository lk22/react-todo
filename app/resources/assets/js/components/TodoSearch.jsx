var React = require('react');

// TODO: add onChange attribute to input
var TodoSearch = React.createClass({

	search: function() {
		var checked = this.refs.checked.checked;
		var search = this.refs.search.value;

		this.props.onSearch(checked, search);
	},

	render: function() {
		return (
			<div id="todoSearch">
				<div className="todoSearch__input">
					<input type="text" ref="search" placeholder="Search todos here.." onChange={this.search}/>
				</div>
				<div className="todoSearch__check">
					<label htmlFor="">
						<input type="checkbox" ref="checked" onChange={this.search}/>
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
});

module.exports = TodoSearch;