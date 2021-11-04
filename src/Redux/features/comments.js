import {createStructuredSelector} from 'reselect';

//The main base of this structure is ducks-modular-redux
export const NAME = 'comment';

// Action Types
const COMMENT_SAVE = '[comment]/COMMENT_SAVE';
const COMMENT_DELETE = '[comment]/COMMENT_DELETE';

// Initial State:
const initialState = {
    data: []
}

// REDUCER:
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.COMMENT_SAVE:
            return { ...state }
        case actionTypes.COMMENT_DELETE:
            return { ...state }
        default:
            return state
    }
}

function savecomment() {
    return {type: COMMENT_SAVE}
}

const comments = (state) => state[NAME];

export const selector = createStructuredSelector({
    comments,
})

export const actionCreators = {
    savecomment,
}

export const actionTypes = {
    COMMENT_SAVE,
    COMMENT_DELETE,
}