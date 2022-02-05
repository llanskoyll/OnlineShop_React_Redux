const defaultUser = {
    authorization: false,
    login: '',
    password: 0,
    cash: 0,
    basket: []
}

const REGISTRATION = 'REGISTRATION'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const ADD_CASH = 'ADD_CASH'
const ADD_BASKET = 'ADD_BASKET'
const BUY_BASKET_SUCCESS = 'BUY_BASKET_SUCCESS'
const REMOVE_CASH = 'REMOVE_CASH'
export const userReducer = (state = defaultUser, action) => {
    switch (action.type) {
        case REGISTRATION:
            return {...state, login: action.payload.login, password: action.payload.password}
        case LOGIN:
            let flag = 0
            if(state.login === action.payload.login && state.password === action.payload.password) {
                flag = true
            }  else {
                flag = false
            }
            return {...state, authorization: flag}
        case LOGOUT:
            return {state, authorization: action.payload}
        case ADD_CASH:
            return {...state, cash: parseInt(state.cash,10) + parseInt(action.payload,10)}
        case ADD_BASKET:
            return {...state, basket: [...state.basket, action.payload]}
        case BUY_BASKET_SUCCESS:
            return {...state, basket: [] }
        case REMOVE_CASH:
            return {...state, cash: action.payload}
        default: return state
    }
}