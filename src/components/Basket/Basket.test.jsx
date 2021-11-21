import React from "react";
import { render, screen } from "@testing-library/react";
import Basket from "./Basket";
import { Provider } from "react-redux";
import store from "../../store/store";

describe('Testing <Basket/>', () => {
  it('Basket have rendered', () => {
    render(<Provider store={store}>
      <Basket
        id={'1'}
        name={'Product 1'}
        category={1}
        price={100}
        numberOfGoods={1}
      />
    </Provider>);

    expect(screen.getByText(/Price/)).toBeInTheDocument();  
  });

  it('Basket without data', () => {
    render(<Provider store={store}><Basket/></Provider>);
    expect(screen.queryByText(/Price/)).toBeNull();
  });

})

