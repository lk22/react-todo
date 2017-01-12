// dependencies
var React = require('react');

// component (stateless)
const Main = (props) => {
	return (
	    <div>
	    	<div className="row">
	    	<h1>Welcome to your brand new ReactJs boilerplate have fun</h1>
	    		<div className="medium-8 large-4 small-centered columns">
	    			{props.children}
	    		</div>
	    	</div>
	    </div>
	);
};

module.exports = Main;