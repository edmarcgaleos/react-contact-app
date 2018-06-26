/*
 *
 * Contacts actions
 *
 */

import {
  DEFAULT_ACTION,
  OPEN_MODAL,
  ADD_CONTACT,
  ON_CHANGE_NAME,
} from './constants';


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function openModalAction(value) {
  return {
    type: OPEN_MODAL,
    value
  }
}
export function addContactAction(contact){
  return {
    type: ADD_CONTACT,
    contact
  }
}
export function changName(name){
  return{
    type: ON_CHANGE_NAME,
    name,
  }
}
