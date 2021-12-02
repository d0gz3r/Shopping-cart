import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { Link } from 'react-router-dom';

// Bootstrap
import { Navbar, Container, Nav} from 'react-bootstrap';
//

import basket from './img/shopping-cart.svg';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const storeData = useTypedSelector(store => store.basket);

  useEffect(() => {
    const arr = Object.values(storeData);
    let sumOfGoods: number = 0;

    if(arr.length){
      arr.forEach((elem) => {
        sumOfGoods += elem.numberOfGoods;
      })
    }
   
    setCounter(sumOfGoods);
  }, [storeData]);


  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav data-testid="navbar" className="me-auto">
            <Nav.Link><Link data-testid="home-link" className={styles.link} to="/">Главная</Link></Nav.Link>
            <Nav.Link><Link className={styles.link} to="/first">Категория 1</Link></Nav.Link>
            <Nav.Link><Link className={styles.link} to="/second">Категория 2</Link></Nav.Link>
            <Nav.Link><Link data-testid="contact-link" className={styles.link} to="/map">Контакты</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Link className={styles.link__basket} to="/basket"><img className={styles.basket} src={basket} alt="" /><span className={styles.counter}>{counter}</span></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default Header;