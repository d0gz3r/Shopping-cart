import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import { useState } from 'react';
import routesConfig from '../../routes/routesConfig';
import Header from '../../components/Header/Header';
import Loader from '../../components/Generic/Loader/Loader';
import { REPO_NAME } from '../../constants/repo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

const App = () => {
    const { isLoading } = useAuth();

    if (isLoading) return <Loader />;

    return (
        <HashRouter basename={`/${REPO_NAME}/`}>
            <div>
                <Header />

                <Container>
                    <Switch>
                        {routesConfig.map(({ path, exact, component }, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={path}
                                    exact={exact}
                                    component={component}
                                />
                            );
                        })}
                        <Redirect to='/' />
                    </Switch>
                </Container>
            </div>
        </HashRouter>
    );
};

export default App;
