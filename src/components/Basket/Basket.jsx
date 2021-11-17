import PropTypes from 'prop-types';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { removeGoodFromBasket } from '../../store/actions';
import { Card, Button } from 'react-bootstrap';

import styles from './Basket.module.css';

const Basket = ({
  id,
  name,
  category,
  price,
  fullPrice,
  setFullPrice
}) => {
  const [showGoods, setShowGoods] = useState(true);

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeGoodFromBasket(id));
    setShowGoods(false);
    setFullPrice(fullPrice-price);
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
            <Button variant="primary" onClick={remove}>Удалить из корзины</Button>
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
  price: PropTypes.number
}

export default Basket;