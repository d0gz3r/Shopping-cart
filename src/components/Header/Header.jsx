import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

// Bootstrap
import { Navbar, Container, Nav} from 'react-bootstrap';
//

import basket from './img/shopping-cart.svg';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const Header = () => {
  const [counter, setCounter] = useState(0);

  const storeData = useSelector(store => store.basketReducer);

  useEffect(() => {
    const arr = Object.values(storeData);
    let sumOfGoods = 0;

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
          <Nav className="me-auto">
            <Nav.Link><Link className={styles.link} to="/" exact>Главная</Link></Nav.Link>
            <Nav.Link><Link className={styles.link} to="/first" exact>Категория 1</Link></Nav.Link>
            <Nav.Link><Link className={styles.link} to="/second" exact>Категория 2</Link></Nav.Link>
            <Nav.Link><Link className={styles.link} to="/map" exact>Контакты</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Link className={styles.link__basket} to="/basket" exact><img className={styles.basket} src={basket} alt="" /><span className={styles.counter}>{counter}</span></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default Header;