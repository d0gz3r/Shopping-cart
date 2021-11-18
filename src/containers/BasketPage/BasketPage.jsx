import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Basket from '../../components/Basket/Basket';

import { Badge } from 'react-bootstrap';

import styles from './BasketPage.module.css';

const BasketPage = () => {
  const [goods, setGoods] = useState([]);
  const [fullPrice, setFullPrice] = useState(0);

  const storeData = useSelector(store => store.basketReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);
    let allPrice = 0;
    
    if(arr.length){
      const res = arr.map((elem) => {
        allPrice += elem[1].price*elem[1].numberOfGoods;

        return {
          id: elem[0],
          ...elem[1]
        }
      }) 
      setFullPrice(allPrice);
      setGoods(res);
    }
  }, []);

  return (
    <>
      <h2 style={{color: '#fff', marginTop:'2rem'}}>Общая цена:<Badge bg="secondary" style={{marginLeft: '1rem'}}>{fullPrice} руб.</Badge></h2>

      <div className={styles.container}>
        {goods.map(({id, name, category, numberOfGoods, price}, index) => {
          return (
            <Basket 
              key={index}
              id={id}
              name={name}
              category={category}
              price={price} 
              numberOfGoods={numberOfGoods}
              fullPrice={fullPrice}
              setFullPrice={setFullPrice} 
            /> 
          )
        })}
      </div>
    </>
  )
}

export default BasketPage;