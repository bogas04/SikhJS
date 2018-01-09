import { combineReducers } from 'redux';
import fontSize from './fontSize';
import nightMode from './nightMode';
import onlineMode from './onlineMode';
import settings from './settings';

export default combineReducers({
  fontSize,
  nightMode,
  onlineMode,
  settings,
});
