import axios from 'axios';

export const SHOW_CATEGORIES = 'SHOW_CATEGORIES';
export const SHOW_TOPPRODUCTS = 'SHOW_TOPPRODUCTS';

export function showCategories() {
    return (dispatch, getState) => {
        axios.get('http://localhost:3000/categories')
            .then(res => {
                dispatch({type: SHOW_CATEGORIES, payload: res.data});
            })
    }
}
export function showTopProducts() {
    return (dispatch, getState) => {
        axios.get('http://localhost:3000/products/top')
            .then(res => {
                console.log(res.data);
                dispatch({type: SHOW_TOPPRODUCTS, payload: res.data});
            })
    }
}

