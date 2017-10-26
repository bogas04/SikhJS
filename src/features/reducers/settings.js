import { RESET_SETTINGS, UPDATE_SETTING } from '../actions';
import { SETTINGS } from '../../constants';

const defaultSettings = {
  [SETTINGS.UNICODE]: false,
  [SETTINGS.TRANSLATION]: true,
  [SETTINGS.TRANSLITERATION]: true,
  [SETTINGS.TRANSLITERATION_LANGUAGE]: 'en',
};

const getSettings = defaults => {
  const ls = localStorage.getItem('settings');
  try {
    return JSON.parse(ls) || defaults;
  } catch (err) {
    return defaults;
  }
};

const setSettings = (settings = defaultSettings) => {
  const ls = JSON.stringify(settings);
  localStorage.setItem('settings', ls);
  return settings;
};

const initialState = getSettings(defaultSettings);

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_SETTINGS: {
      return setSettings(defaultSettings);
    }
    case UPDATE_SETTING: {
      const [ key, value ] = action.payload;
      return setSettings({
        ...state,
        [key]: value,
      });
    }
    default: {
      return state;
    }
  }
};
