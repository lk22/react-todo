// dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, HashHistory} = require('react-router');

// redux required dependencies
var store = require('store').configStore();
var actions = require('Actions');

// foundation CSS
// require('style!css!foundation-sites/dist/css/foundation.min.css');
// $(document).foundation();

// page components
var TodoApp = require('TodoApp');

// subscribe to new changes on state
store.subscribe(() => {
	console.log('New state: ', store.getState());
});

store.dispatch(actions.addTodo('clean the yard i dont have lol :)'));
store.dispatch(actions.setSearchText('clean'));
store.dispatch(actions.showToggleCompletedTodos());

// render application with react Router
ReactDOM.render(
  	<Router history={HashHistory}>
   		<Route path="/" component={TodoApp}>

  		</Route>
  	</Router>,
  	document.getElementById('app')
);