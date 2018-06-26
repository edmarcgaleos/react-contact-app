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
} from './constants';

const initialState = fromJS({
  persons: [
    { id: 1, name: 'John Doe', number: 123124, address: 'Cebu City' }

  ],
  name: "Example",
  number: '',
  address: '',
  showModal: false,
  
}
);

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case OPEN_MODAL:
      console.log(action.value)
      return state
        .set('showModal', action.value)
    case ADD_CONTACT:
    console.log(action)
      return  state
        .setIn('persons', action.contact)
    case ON_CHANGE_NAME:
    console.log(action.name)
      return state
        .set('name', action.name)
    default:
      return state;
  }
}

export default contactsReducer;
