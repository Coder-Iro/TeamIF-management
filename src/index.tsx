import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login';

import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

const index = (
  <>
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </BrowserRouter>
    <ToastContainer position='top-center' />
  </>
);

ReactDOM.render(index, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
