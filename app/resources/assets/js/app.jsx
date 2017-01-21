// dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, HashHistory} = require('react-router');

// foundation CSS
// require('style!css!foundation-sites/dist/css/foundation.min.css');
// $(document).foundation();

// page components
var TodoApp = require('TodoApp');

// render application with react Router
ReactDOM.render(
  	<Router history={HashHistory}>
   		<Route path="/" component={TodoApp}>

  		</Route>
  	</Router>,
  	document.getElementById('app')
);