import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routesConfig from '../../routes/routesConfig';
import Header from '../../components/Header/Header';
import { REPO_NAME } from '../../constants/repo';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

const App = () => {
  return (   
    <BrowserRouter basename={`/${REPO_NAME}/`}>
      <div>
        <Header />

      <Container>
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
      </Container>
      </div>
    </BrowserRouter>
  )
}

export default App;