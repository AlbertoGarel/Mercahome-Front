import axios from 'axios';
import store from "../store";

export const SHOW_CATEGORIES = 'SHOW_CATEGORIES';
export const SHOW_TOPPRODUCTS = 'SHOW_TOPPRODUCTS';
export const SHOW_SLIDERPRODUCTS = 'SHOW_SLIDERPRODUCTS';
export const SHOW_POOLCAT = 'SHOW_POOLCAT';
export const SORT_BYPRICE = 'SORT_BYPRICE';
export const SEARCH = 'SEARCH';
export const DELETE = 'DELETE';
export const GET_USER = 'GET_USER';


export function showCategories() {
    axios.get('http://localhost:3000/categories')
        .then(res => {
            store.dispatch({type: SHOW_CATEGORIES, payload: res.data});
        })
}

export async function showTopProducts() {
    const res = await axios.get('http://localhost:3000/products/top');
    store.dispatch({type: SHOW_TOPPRODUCTS, payload: res.data});

}

export async function showSliderProducts() {
    const res = await axios.get('http://localhost:3000/products/promo');
    store.dispatch({type: SHOW_SLIDERPRODUCTS, payload: res.data});
}

export function showPoolCat(cat) {
    axios.get(`http://localhost:3000/products/?category=${cat}`)
        .then(res => {
            store.dispatch({type: SHOW_POOLCAT, payload: res.data});
        })
}

export function sortByPrice(btnBol) {
    store.dispatch({type: SORT_BYPRICE, payload: btnBol})
};

export async function search(desc) {
    const res = await axios.get(`http://localhost:3000/products/?name=${desc}`);
    store.dispatch({type: SEARCH, payload: {list: res.data, desc: desc}})
};

export async function searchDelete(desc) {
    await store.dispatch({type: DELETE, payload: true})
};

export function userRegister(paramsBody) {
    axios.post('http://localhost:3000/users/login', paramsBody)
        .then(res => {
            store.dispatch({
                type: GET_USER, payload: {
                    username: res.data.user_name,
                    address: res.data.address,
                    token: res.data.token,
                    email: res.data.email
                }
            });
            localStorage.setItem('user', JSON.stringify(res.data))
        })
        .catch(err => console.log(err));
}

