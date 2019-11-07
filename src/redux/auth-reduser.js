import {userApi} from "../api/api";

const GET_USER_AUTH_INFO = 'ADD-GET_USER_AUTH_INFO';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

let authReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_AUTH_INFO:
            return {...state, ...action.userData, isAuth: true};

        default:
            return state;
    }
};

export const getUserAuthInfoAC = (userId, login, email) => ({type: GET_USER_AUTH_INFO, userData: {userId, login, email}});


export const getUserAuthInfo = () => {
    return (dispatch) => {
        userApi.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getUserAuthInfoAC(data.data.id, data.data.login, data.data.email));
                }
            });

    }
};


export default authReduser;