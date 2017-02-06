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

