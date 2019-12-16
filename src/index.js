import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
/**
 *  IMPORT FONTAWESOME
 * */
import '../node_modules/font-awesome/css/font-awesome.min.css';
/**
 * IMPORT CONTAINERS
 * */
import Category from "./containers/Category";

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/categorias" component={Category}/>
            {/*<Route path="/sobre-nosotros" component={Sobrenosotros}/>*/}
        </Switch>
    </BrowserRouter>
        </Provider>
        , document.getElementById('root'));

