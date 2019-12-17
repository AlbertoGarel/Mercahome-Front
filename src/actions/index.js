import axios from 'axios';

export const SHOW_CATEGORIES = 'SHOW_CATEGORIES';

export function showCategories() {
    return (dispatch, getState) => {
        axios.get('http://localhost:3000/categories')
            .then(res => {
                dispatch({type: SHOW_CATEGORIES, payload: res.data});
            })
    }
}


