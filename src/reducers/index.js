import {combineReducers} from 'redux';
//import reducers
import Categories from './categories'
import TopProducts from './TopProducts'
import Slider from './slider'
import PoolCat from './poolCat'
import Search from "./SearchPoduct";
import Users from "./users";


let reducers = combineReducers({
    //reducers...
    Categories,
    TopProducts,
    Slider,
    PoolCat,
    Search,
    Users
});

export default reducers;
