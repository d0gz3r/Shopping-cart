import PropTypes from 'prop-types';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { removeGoodFromBasket, addGoodToBasket } from '../../store/actions';
import { Card, Button } from 'react-bootstrap';

import styles from './Basket.module.css';

const Basket = ({
  id,
  name,
  category,
  price,
  fullPrice,
  setFullPrice,
  numberOfGoods
}) => {
  const [showGoods, setShowGoods] = useState(true);
  const [numOfGoods, setNumOfGoods] = useState(numberOfGoods);

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
    setFullPrice(fullPrice+price)
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

  return (
    <>
      {!showGoods 
        ? null
        : 
        <Card style={{ width: '18rem', marginTop: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center'}}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Category: {category}
            </Card.Text>
            <Card.Text style={{fontWeight: 'bold'}}>
              Price: {price}
            </Card.Text>
            <Card.Text>
              Добавлено товаров: {numOfGoods}
            </Card.Text>
            <div>
              <Button variant="primary" onClick={removeGood} style={{width: '3rem', marginRight: '1rem'}}>-</Button>
              <Button variant="primary" onClick={dispatchGoodsInBasket} style={{width: '3rem'}}>+</Button>
            </div>
            <Button variant="primary" onClick={remove} style={{marginTop: '1rem'}}>Удалить из корзины</Button>
          </Card.Body>
        </Card>
      }
    </>
  )
}

Basket.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.number,
  price: PropTypes.number,
  numberOfGoods: PropTypes.number
}

export default Basket;