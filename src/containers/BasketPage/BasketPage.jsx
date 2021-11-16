import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Basket from '../../components/Basket/Basket';

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
        allPrice += elem[1].price;

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
      <div className={styles.fullPrice}>Общая цена: {fullPrice} руб.</div>

      <div className={styles.container}>
        {goods.map(({id, name, category, price}, index) => {
          return (
            <Basket 
              key={index}
              id={id}
              name={name}
              category={category}
              price={price} 
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