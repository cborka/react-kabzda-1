import {profileApi, userApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, post: "Как дела", likeCount: 5},
        {id: 1, post: "Хорошо!", likeCount: 15},
        {id: 1, post: "Hello all!", likeCount: 25}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: null
};

let profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, post: state.newPostText, likeCount: 0}],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case GET_USER_PROFILE:
            return {...state, profile: action.profile};

        case GET_USER_STATUS:
            return {...state, status: action.status};

         default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const getUserProfileAC = (data) => ({type: GET_USER_PROFILE, profile: data});
export const getUserStatusAC = (data) => ({type: GET_USER_STATUS, status: data});


export const getUserProfile = (userId) => (dispatch) => {
    profileApi.getUserProfile(userId)
        .then((data) => {
            dispatch(getUserProfileAC(data));
        });
};

export const getUserStatus = (userId) => (dispatch) => {
    profileApi.getUserStatus(userId)
        .then((data) => {
            dispatch(getUserStatusAC(data));
        });
};

export const putStatus = (status) => (dispatch) => {
    profileApi.putStatus(status)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(getUserStatusAC(status));
//                dispatch(getUserStatus(5043));
            }

//            dispatch(getUserStatusAC(data));
        });
};

export default profileReduser;