import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import { LoginProvider } from './providers/LoginProvider';

// firebase
import * as firebase from 'firebase/app';

import App from './containers/App/App';
import './styles/index.css';

firebase.initializeApp({
    apiKey: "AIzaSyB_aY4uWPcTAmuoDG6sW9LJMpBuTwBKjnI",
    authDomain: "store-react-eizer.firebaseapp.com",
    projectId: "store-react-eizer",
    storageBucket: "store-react-eizer.appspot.com",
    messagingSenderId: "500066303336",
    appId: "1:500066303336:web:2d66a74be39518dd7aaadd",
    measurementId: "${config.measurementId}"
})

ReactDOM.render(
    <React.StrictMode>
      <LoginProvider>
        <Provider store={store}>
            <App />
        </Provider>
      </LoginProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
