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
} from './constants';

const initialState = fromJS({
  persons: [
    {
      name: 'Jay',
      number: '123',
      address: 'Ucma',
    },
    {
      name: 'X',
      number: '123',
      address: 'Ucma',
    },
  ],

  id: '',
  name: '',
  number: '',
  address: '',
  showModal: false,
  showUpdateModal: false,
  error: '',
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
      console.log(`Xx: ${action.index}`);
      return state
          .set('id', action.index);
    case EDIT_PERSON:
      console.log(`Xxx: ${action.person.address}`);
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
      .updateIn(['persons'], (updateDetails) => updateDetails.push(action.updatedContact));
    case DELETE_CONTACT:

      return state;
    default:
      return state;
  }
}

export default contactsReducer;
