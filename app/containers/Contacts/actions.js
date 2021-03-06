/*
 *
 * Contacts actions
 *
 */

import {
  DEFAULT_ACTION,
  OPEN_MODAL,
  OPEN_UPDATE_MODAL,
  ADD_CONTACT,
  ON_CHANGE_NAME,
  ON_CHANGE_NUMBER,
  ON_CHANGE_ADDRESS,
  UPDATE_CONTACT,
  ERROR_ADD_CONTACT,
  EDIT_INDEX,
  EDIT_PERSON,
} from './constants';


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function openModalAction(value) {
  return {
    type: OPEN_MODAL,
    value,
  };
}
export function openUpdateModalAction(value) {
  return {
    type: OPEN_UPDATE_MODAL,
    value,
  };
}
export function editIndex(index) {
  return {
    type: EDIT_INDEX,
    index,
  };
}
export function editPerson(person) {
  return {
    type: EDIT_PERSON,
    person,
  };
}
export function changeName(name) {
  return {
    type: ON_CHANGE_NAME,
    name,
  };
}
export function changeNumber(number) {
  return {
    type: ON_CHANGE_NUMBER,
    number,
  };
}
export function changeAddress(address) {
  return {
    type: ON_CHANGE_ADDRESS,
    address,
  };
}
export function addContactAction(newContact) {
  return {
    type: ADD_CONTACT,
    newContact,
  };
}
export function errorAddContactAction(err) {
  return {
    type: ERROR_ADD_CONTACT,
    err,
  };
}
export function updateEditedContact(newContact) {
  return {
    type: UPDATE_CONTACT,
    newContact,
  };
}
