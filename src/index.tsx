import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login';
import Register from './pages/Register';

const index = (
  <>
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
    <ToastContainer position='top-center' />
  </>
);

ReactDOM.render(index, document.getElementById('root'));

serviceWorker.register();
