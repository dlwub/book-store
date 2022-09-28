import { createStore } from 'redux';

const CheckStatus = 'categories/categories/Check_Status';

function categoriesReducer(state = [], action) {
  if (action.type === CheckStatus) {
    return 'Under construction';
  }
  return state;
}

const checkStatus = (title) => ({
  type: CheckStatus,
  payload: title,
});

const store = createStore(categoriesReducer);
store.dispatch(CheckStatus);

export { categoriesReducer, checkStatus };
