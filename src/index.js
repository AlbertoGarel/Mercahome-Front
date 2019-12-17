import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
// import store from './store';

//imports for redux
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk'
/**
 *  IMPORT FONTAWESOME
 * */
import '../node_modules/font-awesome/css/font-awesome.min.css';
/**
 * IMPORT CONTAINERS
 * */
import App from './containers/App';
import Category from "./containers/Category";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/categorias" component={Category}/>
                {/*<Route path="/sobre-nosotros" component={Sobrenosotros}/>*/}
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

