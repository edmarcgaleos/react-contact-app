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
} from './constants';

const initialState = fromJS({
  persons: [
  ],
  name: '',
  number: '',
  address: '',
  showModal: false,
  error: '',
}
);

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case OPEN_MODAL:
      console.log(action.value);
      return state
        .set('showModal', action.value);
    case ADD_CONTACT:
      console.log(action);
      return state
        .updateIn(['persons'], (contactDetails) => contactDetails.push(action.newContact))
        .set('name', '')
        .set('number', '')
        .set('address', '');
    case ON_CHANGE_NAME:
      console.log(action);
      return state
        .set('name', action.name);
    case ON_CHANGE_NUMBER:
      console.log(action.number);
      return state
        .set('number', action.number);
    case ON_CHANGE_ADDRESS:
      console.log(action.address);
      return state
        .set('address', action.address);
    case UPDATE_CONTACT:
      console.log(action.updateDetails);
      return state;
    case DELETE_CONTACT:
      console.log(action.deleteContact);
      return state;
    default:
      return state;
  }
}

export default contactsReducer;
