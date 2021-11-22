import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Basket from "./Basket";
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('Basket testing', () => {
  it('Basket renderes correctly without props', () => {
    render(<Provider store={store}><Basket /></Provider>)
    expect(screen.queryByTestId('basket')).toBeNull();
  });

  it('Basket renderes correctly with props', () => {
    render(<Provider store={store}><Basket
      id={'1'}
      name={'Product 1'}
      category={1}
      price={100}
      numberOfGoods={1}
    /></Provider>)
    expect(screen.queryByTestId('basket')).toBeInTheDocument();
  });  

  it('click on add button', () => {
    const setFullPrice = jest.fn();
    const { getByTestId } = render(<Provider store={store}><Basket
      id={'1'}
      name={'Product 1'}
      category={1}
      price={100}
      numberOfGoods={1}
      fullPrice = {100}
      setFullPrice = {setFullPrice}
    /></Provider>);
    
    const addBtn = getByTestId('addBtn');
    const numOfGoods = getByTestId('numOfGoods');

    expect(numOfGoods.textContent).toBe('1');

    userEvent.click(addBtn);  

    expect(numOfGoods.textContent).toBe('2');
  });

  it('click on remove button', () => {
    const setFullPrice = jest.fn();
    const { getByTestId } = render(<Provider store={store}><Basket
      id={'1'}
      name={'Product 1'}
      category={1}
      price={100}
      numberOfGoods={2}
      fullPrice = {100}
      setFullPrice = {setFullPrice}
    /></Provider>);
    
    const removeBtn = getByTestId('removeBtn');
    const numOfGoods = getByTestId('numOfGoods');

    expect(numOfGoods.textContent).toBe('2');

    userEvent.click(removeBtn);  

    expect(numOfGoods.textContent).toBe('1');
  });

  it('click on remove button when last item', () => {
    const setFullPrice = jest.fn();
    const { getByTestId } = render(<Provider store={store}><Basket
      id={'1'}
      name={'Product 1'}
      category={1}
      price={100}
      numberOfGoods={1}
      fullPrice = {100}
      setFullPrice = {setFullPrice}
    /></Provider>);
    
    const removeBtn = getByTestId('removeBtn');
    const numOfGoods = getByTestId('numOfGoods');

    expect(numOfGoods.textContent).toBe('1');

    userEvent.click(removeBtn);  

    expect(screen.queryByTestId('basket')).toBeNull();
  });

  it('delete button work correct', () => {
    const setFullPrice = jest.fn();
    const { getByTestId } = render(<Provider store={store}><Basket
      id={'1'}
      name={'Product 1'}
      category={1}
      price={100}
      numberOfGoods={2}
      fullPrice = {100}
      setFullPrice = {setFullPrice}
    /></Provider>);

    const deleteBtn = getByTestId('deleteBtn');

    expect(screen.getByTestId('basket')).toBeInTheDocument();

    userEvent.click(deleteBtn);

    expect(screen.queryByTestId('basket')).toBeNull();
  })
})