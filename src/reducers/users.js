import {GET_USER} from '../actions'
import {USER_DELETE} from '../actions'

const initialState = {
    username: '',
    address: '',
    token: '',
    email: ''
};

function Users(state = initialState, action) {
    switch (action.type) {
        case GET_USER :
            return Object.assign({}, state, {
                username: action.payload.username,
                address: action.payload.address,
                token: action.payload.token,
                email: action.payload.email
            });
            case USER_DELETE :
            return Object.assign({}, state, {
                username: action.payload.username,
                address: action.payload.address,
                token: action.payload.token,
                email: action.payload.email
            });
        default:
            return state;
    }
}

export default Users;
