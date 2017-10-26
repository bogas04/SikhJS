// Util function
const createAction = type => payload => ({ type, payload });

export const TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE';
export const toggleNightMode = createAction(TOGGLE_NIGHT_MODE);

export const INCREASE_FONT_SIZE = 'INCREASE_FONT_SIZE';
export const increaseFontSize = createAction(INCREASE_FONT_SIZE);

export const DECREASE_FONT_SIZE = 'DECREASE_FONT_SIZE';
export const decreaseFontSize = createAction(DECREASE_FONT_SIZE);

export const NEXT_ANG = 'NEXT_ANG';
export const nextAng = createAction(NEXT_ANG);

export const PREVIOUS_ANG = 'PREVIOUS_ANG';
export const previousAng = createAction(PREVIOUS_ANG);

export const UPDATE_SETTING = 'UPDATE_SETTING';
export const updateSetting = createAction(UPDATE_SETTING);

export const RESET_SETTINGS = 'RESET_SETTINGS';
export const resetSettings = createAction(RESET_SETTINGS);

export const SET_ANG = 'SET_ANG';
export const setAng = createAction(SET_ANG);
