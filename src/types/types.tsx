export interface IGoods {
  id: number;
  name: string;
  category: number;
  price: number; 
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
