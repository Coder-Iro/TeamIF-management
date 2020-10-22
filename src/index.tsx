import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Login from "./pages/Login";

const index = (
    <BrowserRouter basename="/">
        <Switch>
            <Route exact path="/" component={Login}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(index, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
