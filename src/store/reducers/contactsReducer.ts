import { Contact } from '../../types';
import { ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT } from '../actions/contactsActions';

const initialState: Contact[] = [];

const contactsReducer = (state = initialState, action: any): Contact[] => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case REMOVE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    case EDIT_CONTACT:
      return state.map(contact => 
        contact.id === action.payload.id ? action.payload : contact
      );
    default:
      return state;
  }
};

export default contactsReducer;