import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShowGoods from "./ShowGoods";
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('Testing showGoods component', () => {
  it('ShowGoods renderes correctly without props', () => {
    render(<Provider store={store}><ShowGoods /></Provider>)
    expect(screen.queryByTestId('showGoods')).toBeNull();
  });

  it('ShowGoods renderes correctly with props', () => {
    render(<Provider store={store}><ShowGoods
      id={1}
      name={'Product 1'}
      category={1}
      price={100}
    /></Provider>)
    expect(screen.queryByTestId('showGoods')).toBeInTheDocument();
  }); 

  it('Component with 0 items renderes with button "addInBasket"', () => {
    render(<Provider store={store}><ShowGoods
      id={1}
      name={'Product 1'}
      category={1}
      price={100}
    /></Provider>)
    expect(screen.queryByTestId('addInBasket')).toBeInTheDocument();
    expect(screen.queryByTestId('chooseItems')).toBeNull();
  });   

  it('All buttons in cart of Product working corretcly', () => {
    const setNumberOfGoods = jest.fn();
    const { getByTestId } = render(<Provider store={store}><ShowGoods
      id={1}
      name={'Product 1'}
      category={1}
      price={100}
    /></Provider>);
    
    const addInBasket = getByTestId('addInBasket');
    expect(screen.getByTestId('addInBasket')).toBeInTheDocument();
    expect(screen.queryByTestId('chooseItemsBlock')).toBeNull();
    
    userEvent.click(addInBasket);

    expect(screen.addInBasket).toBeUndefined();
    expect(screen.getByTestId('chooseItemsBlock')).toBeInTheDocument();

    const addBtn = getByTestId('addBtn');
    const numOfGoods = getByTestId('numOfGoods');
    const removeBtn = getByTestId('removeBtn');

    expect(numOfGoods.textContent).toBe('1');

    
    userEvent.click(addBtn);  
    expect(numOfGoods.textContent).toBe('2');

   
    userEvent.click(removeBtn);  
    expect(numOfGoods.textContent).toBe('1');
    expect(screen.addInBasket).toBeUndefined();

   
    userEvent.click(removeBtn);
    expect(screen.getByTestId('addInBasket')).toBeInTheDocument();
    expect(screen.queryByTestId('chooseItemsBlock')).toBeNull();
  });
})