import {
    createSelector
} from 'reselect'

import {
    ADD_ONE,
    MINUS_ONE
} from './actions.js'

const INITIAL_STATE = {
    count: 0
}

export const reducer = (state = INITIAL_STATE, action) => {
    // debugger
    switch (action.type) {
        case ADD_ONE:
            return {
                ...state,
                count: state.count + 1
            }
        case MINUS_ONE:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}