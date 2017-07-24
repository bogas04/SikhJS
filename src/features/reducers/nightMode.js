import { TOGGLE_NIGHT_MODE } from '../actions';

export default (state = localStorage.getItem('night-mode') === '1' || false, action) => {
  switch(action.type) {
    case TOGGLE_NIGHT_MODE: {
      localStorage.setItem('night-mode', state ? '0' : '1');
      return !state;
    }
    default: {
      return state;
    }
  }
};