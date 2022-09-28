import { createStore } from 'redux';

function categoriesReducer(state = [], action) {
  switch (action.type) {
    case 'categoryAdded':
      return [...state, action.payload ];
    case 'categoryRemoved':
      return state.filter((category) => category !== action.payload);
    default:
      return state;
  }
}

const categoryAdded = (text) => {
	return {
		type: actions.bookAdded,
		payload: text
	}
}

const categoryRemoved = (text) => {
	return {
		type: actions.bookRemoved,
		payload: text
}
}


const store = createStore(categoriesReducer);

export {categoriesReducer, categoryAdded, categoryRemoved};
