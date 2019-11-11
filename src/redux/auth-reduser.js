import {loginApi, userApi} from "../api/api";
import {stopSubmit} from "redux-form";


const GET_USER_AUTH_INFO = 'ADD-GET_USER_AUTH_INFO';
//const DO_LOGIN = 'DO_LOGIN';

let initialState = {
    userId: null,
    login: null,
    email: null,
    password: null,
    isAuth: false,
    rememberMe: false
};

let authReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_AUTH_INFO:
            return {...state, ...action.userData};

/*
        case DO_LOGIN:
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
                isAuth: action.isAuth
            };
*/

        default:
            return state;
    }
};

export const getUserAuthInfoAC = (userId, login, email, isAuth) => ({
    type: GET_USER_AUTH_INFO, userData: {userId, login, email, isAuth}});

/*
export const doLoginAC = (email, password, rememberMe, isAuth) => (
    {type: DO_LOGIN, email, password, rememberMe, isAuth}
    );
*/


export const getUserAuthInfo = () => {
    return (dispatch) => {
        userApi.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getUserAuthInfoAC(data.data.id, data.data.login, data.data.email, true));
                }
            });

    }
};

export const doLogin = (email, password, rememberMe) => (dispatch) => {

    loginApi.doLogin(email, password, rememberMe)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(getUserAuthInfo());
             }
            else {
                dispatch(getUserAuthInfoAC(null, null, null, false));
                dispatch(stopSubmit("login", {_error: (data.messages.length > 0 ? data.messages[0] : "Вах, ощибочка вышла!")}));

            }
        });
};

export const doExit = () => (dispatch) => {
    loginApi.doExit()
        .then((data) => {
            if (data.resultCode === 0) {
                 dispatch(getUserAuthInfoAC(null, null, null, false));
//                 dispatch(getUserAuthInfo());
            }
        });
};


export default authReduser;