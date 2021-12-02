import ShowGoods from '../../components/ShowGoods/ShowGoods';
import { IGoods } from '../../types/types';
import dataBase from '../../dataBase/goods.json'

import styles from './FirstCategoryPage.module.css';

const FirstCategoryPage = () => {


  const firstCategory: IGoods[] = dataBase.filter((elem) => {
    return elem.category === 1;
  });
  
  return (
    <div className={styles.container}>
      {firstCategory.map(({id, name, category, price}, index) => {
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

export default FirstCategoryPage;