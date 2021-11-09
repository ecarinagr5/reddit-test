import {createStructuredSelector} from 'reselect';

//The main base of this structure is ducks-modular-redux
export const NAME = 'users';

// Action Types
const LIST_TRY = '[users]/LIST_TRY';
const LIST_SUCCESS = '[users]/LIST_SUCCESS';
const LIST_FAILED = '[users]/LIST_FAILED';
const LIST_SAVE = '[users]/LIST_SAVE';

// Initial State:
const initialState = {
    dataList: [],
    idEnabled:null,
    isLoading: false,
}

// REDUCER:
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.LIST_TRY:
            return { ...state, isLoading: true }
        case actionTypes.LIST_FAILED:
            return { ...state, isLoading: false }
        case actionTypes.LIST_SUCCESS:
            return { ...state, isLoading: false, dataList: action.data }
        case actionTypes.LIST_SAVE:
            return { ...state, isLoading: false, idEnabled: action.data }
        default:
            return state
    }
}

const users = (state) => state[NAME];

function list() {
    return { type: LIST_TRY }
}

const save = (user)  => {
    console.log('in reducer',user)
    /*return { type: LIST_SAVE }*/
}

export const selector = createStructuredSelector({
    users,
})

export const actionCreators = {
    list,
    save
}

export const actionTypes = {
    LIST_TRY,
    LIST_FAILED,
    LIST_SUCCESS,
    LIST_SAVE
}