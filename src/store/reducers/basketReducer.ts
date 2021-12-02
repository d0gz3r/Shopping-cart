import { omit } from 'lodash';
import { getLocalStorage } from '../../utils/localStorage'; 
import { IInitialState } from '../../types/types';

enum ActionTypes {
  ADD_GOOD_TO_BASKET = 'ADD_GOOD_TO_BASKET',
  REMOVE_GOOD_FROM_BASKET = 'REMOVE_GOOD_FROM_BASKET'
}

interface addProductAction { 
  type: ActionTypes.ADD_GOOD_TO_BASKET;
  payload: IInitialState;
}

interface removeProductAction { 
  type: ActionTypes.REMOVE_GOOD_FROM_BASKET;
  payload: number;
}

type ProductAction  = addProductAction | removeProductAction;


const initialState:IInitialState = getLocalStorage('store');

const basketReducer = (state = initialState, action: ProductAction): IInitialState => {
  switch (action.type) {
    case ActionTypes.ADD_GOOD_TO_BASKET: 
      return {
        ...state,
        ...action.payload
      }
    case ActionTypes.REMOVE_GOOD_FROM_BASKET: 
      return omit(state, [action.payload])
    default:
      return state;
  }
}

export default basketReducer;