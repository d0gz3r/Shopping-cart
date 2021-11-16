import { ADD_GOOD_TO_BASKET, REMOVE_GOOD_FROM_BASKET } from "../constants/actionTypes"

export const addGoodToBasket = (good) => ({
  type: ADD_GOOD_TO_BASKET,
  payload: good
})

export const removeGoodFromBasket = (goodId) => ({
  type: REMOVE_GOOD_FROM_BASKET,
  payload: goodId
})