import { combineReducers } from 'redux';
import fontSize from './fontSize';
import nightMode from './nightMode';

export default combineReducers({
  fontSize,
  nightMode,
});