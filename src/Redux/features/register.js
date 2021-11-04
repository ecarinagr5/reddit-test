import {createStructuredSelector} from 'reselect';

//The main base of this structure is ducks-modular-redux
export const NAME = 'register';

// Action Types
const REGISTER_TRY = '[register]/LIST_TRY';
const REGISTER_SUCCESS = '[register]/LIST_SUCCESS';
const REGISTER_FAILED = '[register]/LIST_FAILED';

// Initial State:
const initialState = {
    userId:null
}

// REDUCER:
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.REGISTER_TRY:
            return { ...state }
        case actionTypes.REGISTER_FAILED:
            return { ...state}
        case actionTypes.REGISTER_SUCCESS:
            return { ...state, userId: action.data }
        default:
            return state
    }
}

function list() {
    return {type: LIST_TRY}
}

const users = (state) => state[NAME];

export const selector = createStructuredSelector({
    users,
})

export const actionCreators = {
    list,
}

export const actionTypes = {
    REGISTER_TRY,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
}