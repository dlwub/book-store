import { createStore } from 'redux';

function categoriesReducer(state = [], action) {
  if (action.type === 'checkStatus') {
    return 'Under construction';
  }
  return state;
}

const checkStatus = (title) => ({
  type: 'Check_Status',
  payload: title,
});

const store = createStore(categoriesReducer);
store.dispatch(checkStatus);

export { categoriesReducer, checkStatus };
