import {createStructuredSelector} from 'reselect';

//The main base of this structure is ducks-modular-redux
export const NAME = 'users';

// Action Types
const POST_TRY = '[users]/POST_TRY';
const POST_SUCCESS = '[users]/POST_SUCCESS';
const POST_FAILED = '[users]/POST_FAILED';

// Initial State:
const initialState = {
    dataPost: [],
    isLoading: false,
}

// REDUCER:
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.POST_TRY:
            return { ...state, isLoading: true }
        case actionTypes.POST_FAILED:
            return { ...state, isLoading: false }
        case actionTypes.POST_SUCCESS:
            return { ...state, isLoading: false, dataList: action.data }
        default:
            return state
    }
}

function allpost() {
    return {type: POST_TRY}
}

const posts = (state) => state[NAME];

export const selector = createStructuredSelector({
    posts,
})

export const actionCreators = {
    allpost,
}

export const actionTypes = {
    POST_TRY,
    POST_FAILED,
    POST_SUCCESS,
}