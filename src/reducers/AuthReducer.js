import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGE, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGIN
} from './../actions/types'

// State can not equal undefine
const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false}


export default (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGE:
            return {...state, password: action.payload};
        case LOGIN: 
            return {...state, loading: true, error: ''}
        case LOGIN_SUCCESS: 
            return {...state, ...INITIAL_STATE  ,user: action.payload};
        case LOGIN_FAIL:
            return {...state, error: 'Authentication Fail', loading: false};
        default:
            return state;
    };
}