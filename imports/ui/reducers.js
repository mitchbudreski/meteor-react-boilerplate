import { combineReducers } from 'redux';

export function errorMessage(state = '', action) {
    if (action.errorMessage) {
        return action.errorMessage;
    }
    return state;
}

export function name(state = '', action) {
  switch (action.type) {
    case 'SAY_HELLO':
      return action.name;
    default:
      return state;
  }
};

export default combineReducers({
    name,
    errorMessage
});