var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('Reducers');

// config the redux store to hold state
export var configStore = () => {
	// combine reducers
	var reducer = redux.combineReducers({
		searcText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	});

	// enable redux developer tools
	var store = redux.createStore(reducer, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	// return store
	return store;
};