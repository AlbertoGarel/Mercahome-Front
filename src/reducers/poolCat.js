import {SHOW_POOLCAT} from '../actions'

const initialState = {
    list: []
};

function PoolCat(state = initialState, action) {
    switch (action.type) {
        case SHOW_POOLCAT :
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}

export default PoolCat;
