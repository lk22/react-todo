//---------------------------------|
//		  Action Generators		   |
//---------------------------------|

// set search text action generator
export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText: searchText
	};
};

// toggle show completed todo's action generator
export var showToggleCompletedTodos = () => {
	return {
		type: 'TOGGLE_COMPLETED'
	};
};

// add todo action generator
export var addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text: text
	};
};

// toggle todos action generator
export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id: id
	};
};