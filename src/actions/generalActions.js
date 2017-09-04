import * as types from './actionTypes';


export function toggleMobileMenu(showMenu){
  return {type: types.TOGGLE_MOBILE_MENU, showMenu};
}
