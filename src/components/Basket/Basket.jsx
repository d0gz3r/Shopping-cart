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
  if(!id || !name || !category || !price || !numberOfGoods) return null;

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
            <div style={{display: 'flex', justifyContent:'center',alignItems: 'center'}}>
              <Button variant="primary" onClick={removeGood} style={{width: '3rem', borderRadius: '0.25rem 0 0 0.25rem'}}>-</Button>
              <Card.Text style={{display: 'inline-block', padding: '6px', margin: '0', width: '48px', height: '38px', borderBottom: '2px solid #0D6EFD', borderTop: '3px solid #0D6EFD'}}>
              {numOfGoods}
              </Card.Text>
              <Button variant="primary" onClick={dispatchGoodsInBasket} style={{width: '3rem', borderRadius: '0 0.25rem 0.25rem 0'}}>+</Button>
            </div>
            <Button variant="danger" onClick={remove} style={{marginTop: '1rem'}}>Удалить из корзины</Button>
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