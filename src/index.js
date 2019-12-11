import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
/**
 *  IMPORT FONTAWESOME
 * */
import '../node_modules/font-awesome/css/font-awesome.min.css';
/**
 * IMPORT CONTAINERS
 * */
import Category from "./containers/Category";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/categorias" component={Category}/>
            {/*<Route path="/sobre-nosotros" component={Sobrenosotros}/>*/}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

