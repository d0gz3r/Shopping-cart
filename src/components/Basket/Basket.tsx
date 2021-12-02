import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeGoodFromBasket, addGoodToBasket } from '../../store/actions';
import { Card, Button } from 'react-bootstrap';
import { IGoods } from '../../types/types';

import styles from './Basket.module.css';

interface IBasket extends IGoods {
  fullPrice: number;
  setFullPrice(value: number): void;
  numberOfGoods: number;
}

const Basket: React.FC<IBasket> = ({
  id,
  name,
  category,
  price,
  fullPrice,
  setFullPrice,
  numberOfGoods
}) => {
  const [showGoods, setShowGoods] = useState<boolean>(true);
  const [numOfGoods, setNumOfGoods] = useState<number>(numberOfGoods);

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeGoodFromBasket(id));
    setShowGoods(false);
    setFullPrice(fullPrice-(price*numOfGoods));
  }

  const dispatchGoodsInBasket = () => {
    dispatch(addGoodToBasket({
      [id]:{
        name,
        category,
        price,
        numberOfGoods: numOfGoods+1
      }
    }));  
    setFullPrice(fullPrice+price);
    setNumOfGoods(numOfGoods+1);
  }

  const removeGood = () => {
    if(numOfGoods === 1){
      setNumOfGoods(0); 
      remove();
    }else{
      dispatch(addGoodToBasket({
        [id]:{
          name,
          category,
          price,
          numberOfGoods: numOfGoods-1
        }
      }));   
      setFullPrice(fullPrice-price)
      setNumOfGoods(numOfGoods-1);
    }  
  }
  if(!id || !name || !category || !price || !numberOfGoods) return null;

  return (
    <>
      {!showGoods 
        ? null
        : 
        <Card data-testid="basket" style={{ width: '18rem', marginTop: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center'}}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Category: {category}
            </Card.Text>
            <Card.Text style={{fontWeight: 'bold'}}>
              Price: {price}
            </Card.Text>
            <div style={{display: 'flex', justifyContent:'center',alignItems: 'center'}}>
              <Button data-testid="removeBtn" variant="primary" onClick={removeGood} style={{width: '3rem', borderRadius: '0.25rem 0 0 0.25rem'}}>-</Button>
              <Card.Text data-testid="numOfGoods" style={{display: 'inline-block', padding: '6px', margin: '0', width: '48px', height: '38px', borderBottom: '2px solid #0D6EFD', borderTop: '3px solid #0D6EFD'}}>
              {numOfGoods}
              </Card.Text>
              <Button data-testid="addBtn" variant="primary" onClick={dispatchGoodsInBasket} style={{width: '3rem', borderRadius: '0 0.25rem 0.25rem 0'}}>+</Button>
            </div>
            <Button data-testid="deleteBtn" variant="danger" onClick={remove} style={{marginTop: '1rem'}}>Удалить из корзины</Button>
          </Card.Body>
        </Card>
      }
    </>
  )
}


export default Basket;