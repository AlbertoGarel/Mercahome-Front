import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            {/*<Route path="/contacto" component={Contacto}/>*/}
            {/*<Route path="/sobre-nosotros" component={Sobrenosotros}/>*/}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

