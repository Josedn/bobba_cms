import { combineReducers } from 'redux';
import login from './login';
import news from './news';
import misc from './misc';
import user from './user';

export default combineReducers({
  login,
  news,
  misc,
  user
});

