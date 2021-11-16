import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routesConfig from '../../routes/routesConfig';

import Header from '../../components/Header/Header';
import HomePage from '../HomePage/HomePage';

import styles from './App.module.css';

const App = () => {
  return (   
    <BrowserRouter basename="/Shopping-cart/">
      <div className={styles.main__container}>
        <Header />

        <Switch>
          {routesConfig.map(({path, exact, component}, index) => {
            return (
              <Route 
                key={index}
                path={path}
                exact={exact}
                component={component}
              />
            )
          })}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;