import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import basket from './img/shopping-cart.svg';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const Header = () => {
  const [counter, setCounter] = useState(0);

  const storeData = useSelector(store => store.basketReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);
    
    setCounter(arr.length);
  }, [storeData]);

  return (
    <div className={styles.container}>
      <ul className={styles.container__list}>
        <li className={styles.container__item}><NavLink to="/" exact>Главная</NavLink></li>
        <li className={styles.container__item}><NavLink to="/first" exact>Категория 1</NavLink></li> 
        <li className={styles.container__item}><NavLink to="/second" exact>Категория 2</NavLink></li> 
        <li className={styles.container__item}><NavLink to="/basket" exact><img className={styles.basket} src={basket} alt="" /><span className={styles.counter}>{counter}</span></NavLink></li> 
      </ul>
    </div>
  )
}


export default Header;