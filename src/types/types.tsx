import { Dispatch, SetStateAction } from "react";

export interface IGoods {
  id: number;
  name: string;
  category: number;
  price: number; 
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IUser{
  displayName: string;
  email: string;
  photoURL: string;
}

export interface IInitialState {
  [x: number]: {
    name: string;
    category: number;
    price: number;
    numberOfGoods: number;
  }
}

export interface IBasketPage extends IGoods {
  numberOfGoods: number;
  fullPrice: number;
  setFullPrice: number;
}
