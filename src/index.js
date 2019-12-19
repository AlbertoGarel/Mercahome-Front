import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
//imports for redux
/**
 *  IMPORT FONTAWESOME
 * */
import '../node_modules/font-awesome/css/font-awesome.min.css';
/**
 * IMPORT CONTAINERS
 * */
import App from './containers/App';
import Category from "./containers/Category";

// const store = createStore(reducers, composeEnhancers());
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

