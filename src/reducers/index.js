import { combineReducers } from 'redux';
import login from './login';
import news from './news';

export default combineReducers({
  login,
  news
});
