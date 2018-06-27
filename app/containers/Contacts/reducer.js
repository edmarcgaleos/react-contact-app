/*
 *
 * Contacts reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  OPEN_MODAL,
  ADD_CONTACT,
  ON_CHANGE_NAME,
  ON_CHANGE_NUMBER,
  ON_CHANGE_ADDRESS,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  OPEN_UPDATE_MODAL,
  EDIT_INDEX,
  EDIT_PERSON,
  ERROR_ADD_CONTACT,
} from './constants';

const initialState = fromJS({
  persons: [
  ],

  id: '',
  name: '',
  number: '',
  address: '',
  showModal: false,
  showUpdateModal: false,
  alert: '',
}
);

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case OPEN_MODAL:
      return state
        .set('showModal', action.value);
    case OPEN_UPDATE_MODAL:
      return state
        .set('showUpdateModal', action.value);
    case EDIT_INDEX:
      return state
          .set('id', action.index);
    case EDIT_PERSON:
      return state
          .set('name', action.person.name)
          .set('number', action.person.number)
          .set('address', action.person.address);
    case ADD_CONTACT:
      return state
        .updateIn(['persons'], (contactDetails) => contactDetails.push(action.newContact))
        .set('name', '')
        .set('number', '')
        .set('address', '');
    case ERROR_ADD_CONTACT:
      return state
        .set('error', action.err);
    case ON_CHANGE_NAME:
      return state
        .set('name', action.name);
    case ON_CHANGE_NUMBER:
      return state
        .set('number', action.number);
    case ON_CHANGE_ADDRESS:
      return state
        .set('address', action.address);
    case UPDATE_CONTACT:
      return state
        .set('persons', action.persons);
    case DELETE_CONTACT:
      return state
      .set('persons', action.delPerson);
    default:
      return state;
  }
}

export default contactsReducer;
