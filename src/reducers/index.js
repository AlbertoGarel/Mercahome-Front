import {combineReducers} from 'redux';
//import reducers
import Categories from './categories'
import TopProducts from './TopProducts'


let reducers = combineReducers({
    //reducers...
    Categories,
    TopProducts,
});

export default reducers;
