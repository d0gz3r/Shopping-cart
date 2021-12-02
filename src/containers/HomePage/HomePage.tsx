import ShowGoods from '../../components/ShowGoods/ShowGoods';
import { IGoods } from '../../types/types';
import dataBase from '../../dataBase/goods.json'
import styles from './HomePage.module.css';


const HomePage = () => {
  const goods:IGoods[] = dataBase;

  return (
    <div className={styles.container}>
      {goods.map(({id, name, category, price}, index) => {
        return (
          <ShowGoods 
            key={index}
            id={id}
            name={name}
            category={category}
            price={price} 
          />
        )
      })}
    </div>
  )
}

export default HomePage;