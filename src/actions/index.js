import axios from 'axios';

export const SHOW_CATEGORIES = 'SHOW_CATEGORIES';
export const SHOW_TOPPRODUCTS = 'SHOW_TOPPRODUCTS';
export const SHOW_SLIDERPRODUCTS = 'SHOW_SLIDERPRODUCTS';
export const SHOW_POOLCAT = 'SHOW_POOLCAT';

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
                dispatch({type: SHOW_TOPPRODUCTS, payload: res.data});
            })
    }
}

export function showSliderProducts() {
    return (dispatch, getState) => {
        axios.get('http://localhost:3000/products/promo')
            .then(res => {
                dispatch({type: SHOW_SLIDERPRODUCTS, payload: res.data});
            })
    }
}

export function showPoolCat(cat) {
    console.log('categoria',cat);
    return (dispatch, getState) => {
        axios.get(`http://localhost:3000/products/?category=${cat}`)
            .then(res => {
                // console.log('',res.data);
                dispatch({type: SHOW_POOLCAT, payload: res.data});
            })
    }
}


