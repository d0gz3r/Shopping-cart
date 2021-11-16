import ShowGoods from '../../components/ShowGoods/ShowGoods';

import dataBase from '../../dataBase/goods.json'

import styles from './HomePage.module.css';

const HomePage = () => {
  
  return (
    <div className={styles.container}>
      {dataBase.map(({id, name, category, price}, index) => {
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