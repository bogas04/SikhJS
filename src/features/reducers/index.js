import { combineReducers } from 'redux';
import fontSize from './fontSize';
import nightMode from './nightMode';
import settings from './settings';

export default combineReducers({
  fontSize,
  nightMode,
  settings,
});
