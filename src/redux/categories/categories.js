import { createStore } from 'redux';

const Check_Status = 'Check_Status';

function categoriesReducer(state = [], action) {
  if (action.type === Check_Status) {
    return 'Under construction';
  }
  return state;
}

const checkStatus = (title) => ({
  type: Check_Status,
  payload: title,
});

const store = createStore(categoriesReducer);
store.dispatch(Check_Status);

export { categoriesReducer, checkStatus };
