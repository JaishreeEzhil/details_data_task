import { combineReducers, createStore } from 'redux';
import userReducer from './user';
import pageReducer from './page';
import formReducer from './form';

export default createStore(combineReducers({
  users: userReducer,
  pageTitle: pageReducer,
  form: formReducer,
}));
