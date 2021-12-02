import ShowGoods from '../../components/ShowGoods/ShowGoods';
import { IGoods } from '../../types/types';
import dataBase from '../../dataBase/goods.json'

import styles from './SecondCategoryPage.module.css';

const SecondCategoryPage = () => {

  const secondCategory: IGoods[] = dataBase.filter((elem) => {
    return elem.category === 2;
  })

  return (
    <div className={styles.container}>
      {secondCategory.map(({id, name, category, price}, index) => {
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

export default SecondCategoryPage;