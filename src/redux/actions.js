export const ADD_ONE = 'ADD_ONE'
export const MINUS_ONE = 'MINUS_ONE'

export const addOne = count => {
    return {
        type: ADD_ONE,
        count
    }
}

export const minusOne = count => {
    return {
        type: MINUS_ONE,
        count
    }
}