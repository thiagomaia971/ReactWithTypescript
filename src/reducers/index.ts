import { combineReducers } from 'redux';
/*const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;*/
import todo from './todo';

const rootReducer = combineReducers({
  todo,
/*  routing: routerReducer,
  form: formReducer,*/
});

export default rootReducer;
