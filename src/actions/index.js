import firebase from 'firebase';
import {EMAIL_CHANGED, PASSWORD_CHANGE, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN} from './types';

export const emailChanged = (text) => {
    return {type: EMAIL_CHANGED, payload: text}
};

export const passwordChange = (text) => {
    return {type: PASSWORD_CHANGE, payload: text}
}

// ReduxThunk for Async request
export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({ type: LOGIN})
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => loginSuccss(dispatch, user))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(user => loginSuccss(dispatch, user))
                    .catch(() => loginFail(dispatch))
            })
    };
};

const loginFail = (dispatch) => {
    dispatch({type: LOGIN_FAIL});
};

const loginSuccss = (dispatch, user) => {
    dispatch({type: LOGIN_SUCCESS, payload: user});
};