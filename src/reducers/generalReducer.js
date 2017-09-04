import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function generalReducer (state = initialState.general, action) {
  switch (action.type) {
    case types.TOGGLE_MOBILE_MENU:
      return [
        ...state,
        Object.assign({}, action.showMenu)
      ];

    default:
      return state;
  }

}

