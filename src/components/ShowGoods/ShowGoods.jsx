import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { addGoodToBasket, removeGoodFromBasket } from '../../store/actions';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import styles from './ShowGoods.module.css';

const ShowGoods = ({
  id,
  name,
  category,
  price
}) => {
  // STORE
  const dispatch = useDispatch();
  const storeData = useSelector(store => store.basketReducer);

  //  STATE
  const [numberOfGoods, setNumberOfGoods] = useState(0);


  const dispatchGoodsInBasket = () => {

    dispatch(addGoodToBasket({
      [id]:{
        name,
        category,
        price,
        numberOfGoods: numberOfGoods+1
      }
    }));  

    setNumberOfGoods(numberOfGoods+1);
  }  

  const removeGood = () => {
    if(numberOfGoods === 1){
      setNumberOfGoods(0); 
      dispatch(removeGoodFromBasket(id)); 
    }else{
      dispatch(addGoodToBasket({
        [id]:{
          name,
          category,
          price,
          numberOfGoods: numberOfGoods-1
        }
      }));   
      setNumberOfGoods(numberOfGoods-1);
    }
  }

  useEffect(() => {
    const arr = storeData[id];
    if(arr){
      setNumberOfGoods(arr.numberOfGoods);
    }
  }, [storeData])

  return (
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
          Добавлено товаров: {numberOfGoods}
        </Card.Text>
        {numberOfGoods === 0 
          ? <Button variant="primary" onClick={dispatchGoodsInBasket}>Добавить в корзину</Button> 
          : 
          <div>
            <Button variant="primary" onClick={removeGood} style={{width: '3rem', marginRight: '1rem'}}>-</Button>
            <Button variant="primary" onClick={dispatchGoodsInBasket} style={{width: '3rem'}}>+</Button>    
          </div>        
        }
      </Card.Body>
    </Card>
  )
}

ShowGoods.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.number,
  price: PropTypes.number
}

export default ShowGoods;