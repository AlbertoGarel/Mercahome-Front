import {combineReducers} from 'redux';
//import reducers
import Categories from './categories'
import TopProducts from './TopProducts'
import Slider from './slider'


let reducers = combineReducers({
    //reducers...
    Categories,
    TopProducts,
    Slider
});

export default reducers;
