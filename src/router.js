import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
/**
 * IMPORT CONTAINERS
 * */
import Category from '../src/containers/Category'
import AdminView from '../src/containers/AdminView'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/categorias" component={Category}/>
            <Route path="/admin" component={AdminView}/>
            {/*<Route path="/sobre-nosotros" component={Sobrenosotros}/>*/}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

