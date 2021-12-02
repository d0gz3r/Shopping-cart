import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../store/store';
import Header from './Header';
import userEvent from "@testing-library/user-event";

describe('React Router', () => {
  it('should render home page', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render( 
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    )

    const navbar = getByTestId('navbar');
    const link = getByTestId('home-link');
    
    expect(container.innerHTML).toMatch('Главная');
    expect(navbar).toContainElement(link);
  });

  it('should navigate to page', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render( 
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    )

    userEvent.click(getByTestId('contact-link'));
    expect(container.innerHTML).toMatch('Контакты');
  });
})