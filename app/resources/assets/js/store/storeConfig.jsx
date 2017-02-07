var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('Reducers');

// config the redux store to hold state
export var configure = (state = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, state, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
