import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import * as serviceWorker from './serviceWorker';
import Router from './router';
import { ProfileProvider } from './hooks/useProfile';

const index = (
  <ProfileProvider>
    <Router />
    <ToastContainer position='top-center' />
  </ProfileProvider>
);

ReactDOM.render(index, document.getElementById('root'));

serviceWorker.register();
