import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function generalReducer (state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_MOBILE_MENU:
      return Object.assign({},state,{showMenu:action.showMenu});

    default:
      return state;
  }

}

