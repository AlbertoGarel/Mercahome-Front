import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
/**
 *  IMPORT FONTAWESOME
 * */
import '../node_modules/font-awesome/css/font-awesome.min.css';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            {/*<Route path="/contacto" component={Contacto}/>*/}
            {/*<Route path="/sobre-nosotros" component={Sobrenosotros}/>*/}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

