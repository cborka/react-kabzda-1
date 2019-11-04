const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Dimych",
            avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4BuQAQ9wJC7HlbzS9CF1_IpgSz0lM9CFIRN43yKgHnsO4G3GH"
        },
        {
            id: 2,
            name: "Boris",
            avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTS7LFEGuHZFKOc_AtQudyknAdpG1PtpKDX-81XeaB_6xJstKD"
        },
        {
            id: 3,
            name: "Alex",
            avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtrNV9_dTsu2iNNIsdlgfVPnzYYnXB47dl5jtQuudRtEtp2rFS"
        }
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are you?"},
        {id: 1, message: "Yo"},
        {id: 1, message: "Yo"},
        {id: 1, message: "Yo"}
    ],
    newMessage: 'newMessage',
    profile: null
};

let dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: state.newMessage}],
                newMessage: ''
            };
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.newText
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile}
        default:
            return state;
    }
};

export const addMessage = () => ({type: ADD_MESSAGE});

export const changeNewMessage = (text) =>
    ({type: UPDATE_NEW_MESSAGE, newText: text});

export const setUserProfile = (data) => ({type: SET_USER_PROFILE, profile: data});


export default dialogsReduser;