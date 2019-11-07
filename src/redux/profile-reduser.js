import {userApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const GET_USER_PROFILE = 'GET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, post: "Как дела", likeCount: 5},
        {id: 1, post: "Хорошо!", likeCount: 15},
        {id: 1, post: "Hello all!", likeCount: 25}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
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
            return {...state, profile: action.profile}

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const getUserProfileAC = (data) => ({type: GET_USER_PROFILE, profile: data});


export const getUserProfile = (userId) => (dispatch) => {
    userApi.getUserProfile(userId)
        .then((data) => {
            dispatch(getUserProfileAC(data));
        });
}


export default profileReduser;