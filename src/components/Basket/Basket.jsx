import PropTypes from 'prop-types';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { removeGoodFromBasket } from '../../store/actions';

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
        <div className="goods__wrapper">
          <p className="name">{name}</p>
          <p className="category">Category: {category}</p>
          <p className="price">Price: {price}</p>
    
          <button className="goods__button" onClick={remove}>Удалить из корзины</button>
        </div>
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