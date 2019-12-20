import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'react-redux'
import {Redirect, BrowserRouter, Route, Switch} from 'react-router-dom';
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
import SearchView from "./components/SearchView";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";

console.log('%cSilence is Gold...', 'color:white;background-color:purple')
// const store = createStore(reducers, composeEnhancers());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/categorias" component={Category}/>
                <Route path="/search-results" component={SearchView}/>
                <Route path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

