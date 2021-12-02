import { ADD_GOOD_TO_BASKET, REMOVE_GOOD_FROM_BASKET } from "../constants/actionTypes";
import { IInitialState } from "../../types/types";

export const addGoodToBasket = (good: IInitialState) => ({
  type: ADD_GOOD_TO_BASKET,
  payload: good
})

export const removeGoodFromBasket = (goodId: number) => ({
  type: REMOVE_GOOD_FROM_BASKET,
  payload: goodId
})