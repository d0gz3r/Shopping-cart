import { omit } from 'lodash';
import { ADD_GOOD_TO_BASKET, REMOVE_GOOD_FROM_BASKET } from '../constants/actionTypes';

const initialState = {};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOOD_TO_BASKET: 
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_GOOD_FROM_BASKET: 
      return omit(state, [action.payload])
    default:
      return state;
  }
}

export default basketReducer;