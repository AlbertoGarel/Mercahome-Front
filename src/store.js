import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(thunk));

const initialState = {
    categories: [],
};
console.table('store',initialState.categories);
export default store;
