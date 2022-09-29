import { createStore } from 'redux';

function categoriesReducer(state = [], action) {
  if (action.type === 'check_status') {
    return 'Under construction';
  }
  return state;
}

const checkStatus = () => ({
  type: 'check_status',
});

const store = createStore(categoriesReducer);

export { categoriesReducer, checkStatus, store };
