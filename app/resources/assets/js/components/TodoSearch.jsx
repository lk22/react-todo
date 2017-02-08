var React = require('react');
var {connect} = require('react-redux');

var actions = require('Actions');

// TODO: add onChange attribute to input
export var TodoSearch = React.createClass({

	render: function() {
		var {dispatch, check, searchText} = this.props;

		return (
			<div id="todoSearch">
				<div className="todoSearch__input">
					<input type="text" ref="search" className="form-control" value={searchText} placeholder="Search todos here.." onChange={() => {
						var search = this.refs.search.value;
						dispatch(actions.setSearchText(search));
					}}/>
				</div>
				<div className="todoSearch__check">
					<label htmlFor="">
						<input type="checkbox" classNmae="form-control" checked={check} ref="check" onChange={() => {
							dispatch(actions.showToggleCompletedTodos());
						}}/>
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
});

export default connect(
	(state) => {
		return {
			isChecked: state.check,
			saerchText: state.search
		};
	}
)(TodoSearch);