import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { addGoodToBasket, removeGoodFromBasket } from '../../store/actions';
import { useEffect, useState } from 'react';

import styles from './ShowGoods.module.css';

const ShowGoods = ({
  id,
  name,
  category,
  price
}) => {
  const dispatch = useDispatch();
  const storeData = useSelector(store => store.basketReducer);

  const [goodsInBasket, setGoodsInBasket] = useState(false);

  const dispatchGoodsInBasket = () => {
    if(!goodsInBasket){
      dispatch(addGoodToBasket({
        [id]:{
          name,
          category,
          price
        }
      }));
      setGoodsInBasket(true);  
    }else{
      dispatch(removeGoodFromBasket(id));
      setGoodsInBasket(false);
    }
  }  

  useEffect(() => {
    if(id in storeData){
      setGoodsInBasket(true);
    }else{
      setGoodsInBasket(false); 
    }
  }, [storeData])

  return (
    <div className="goods__wrapper">
      <p className="name">{name}</p>
      <p className="category">Category: {category}</p>
      <p className="price">Price: {price}</p>

      <button className="goods__button" onClick={dispatchGoodsInBasket}>{goodsInBasket ? 'Удалить из корзины' : 'Добавить в корзину'}</button>
    </div>
  )
}

ShowGoods.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.number,
  price: PropTypes.number
}

export default ShowGoods;