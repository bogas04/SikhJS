import { TOGGLE_ONLINE_MODE } from '../actions';

export default (state = true, action) => {
  switch (action.type) {
    case TOGGLE_ONLINE_MODE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
