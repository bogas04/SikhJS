import { DECREASE_FONT_SIZE, INCREASE_FONT_SIZE } from '../actions';

export default (state = parseInt(localStorage.getItem('font-size')) || 16, action) => {
  switch (action.type) {
    case DECREASE_FONT_SIZE: {
      localStorage.setItem('font-size', Math.max(state - 2, 5));
      return Math.max(state - 2, 5);
    }
    case INCREASE_FONT_SIZE: {
      localStorage.setItem('font-size', state + 2);
      return state + 2;
    }
    default: {
      return state;
    }
  }
};
