import basketReducer from "./reducers/basketReducer";
import { addGoodToBasket, removeGoodFromBasket } from "./actions/index";

describe('Testing redux', () => {
  it('products should be added and removed in basket correctly', () => {
    // "Add action" must work correctly
    const addAction = addGoodToBasket({
      [1]: {
        name: 'Product 1',
        category: 1,
        price: 100,
        numberOfGoods: 1,
      }
    });
    const state = {};
    const newState = basketReducer(state, addAction);
    expect(Object.keys(newState).length).toBe(1);
    // =================================================


    // "Remove action" must work correctly
    const removeAction = removeGoodFromBasket(1);
    const stateAfterRemove = basketReducer(newState, removeAction);
    expect(Object.keys(stateAfterRemove).length).toBe(0);  
  });

})