// dependencies
var moment = require('moment');
var uuid = require('node-uuid');

// search text reducer
export var searchTextReducer = (state = '', action) => {
  	switch (action.type) {
    	case 'SET_SEARCH_TEXT':
    		return action.searchText;
    	default:
    		return state;
   	};
};


// show completed reducer
export var showCompletedReducer = (state = false, action) => {
  	switch (action.type) {
    	case 'TOGGLE_SHOW_COMPLETED':
      		return !state;
    	default:
     		return state;
  	}
};

// todos reducer
export var todosReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: uuid(),
					text: action.text,
					completed:false,
					created_at: moment.unix(),
					completed_at: undefined
				}
			];
		break;

		case 'ADD_TODOS':
			return [
				...state, // the state
				...action.todos // the todos
			];
		break;

		case 'TOGGLE_TODO':
			return state.map((todo) => {
				if(todo.id === action.id) {
					var nextCompleted = !todo.completed;

					return {
						...todo,
						completed: nextCompleted,
						completed_at: nextCompleted ? moment().unix() : undefined
					}
				} else {
					return todo;
				}
			});
		default:
			return state;
			break;
	}
};
