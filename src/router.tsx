import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/' component={() => <Redirect to='/team' />} />
        <Route exact path='/team' component={MainPage} />
        <Route exact path='/project' component={MainPage} />
        <Route exact path='/account' component={MainPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
