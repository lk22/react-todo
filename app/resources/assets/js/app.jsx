// dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, HashHistory} = require('react-router');
var {Provider} = require('react-redux');

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
  	<Provider store={store}>
		<TodoApp/>
  	</Provider>,
  	document.getElementById('app')
);