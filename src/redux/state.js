const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let rerenderEntireTree = () => {
    console.log('state changed');
};
let store = {
    _callSubscriber () {
        console.log('store: observer не назначен.');
    },
    subscriber (observer) {
        this._callSubscriber = observer;
    },
    _state: {
        dialogsPage: {
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
            newMessage: 'newMessage'
        },
        profilePage: {
            posts: [
                {id: 1, post: "Как дела", likeCount: 5},
                {id: 1, post: "Хорошо!", likeCount: 15},
                {id: 1, post: "Hello all!", likeCount: 25}
            ],
            newPostText: 'it-kamasutra.com'
        },
        sidebarPage: {
            friends: [
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
            ]
        }
    },

    getState () {
        return this._state;
    },

    addPost () {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText (text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber();
    },
    addMessage () {
        let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessage
            }
        ;
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessage = '';
        this._callSubscriber();
    },
    updateNewMessage (text) {
        this._state.dialogsPage.newMessage = text;
        this._callSubscriber();
    },

    dispath (action) {
        debugger;
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                    id: 7,
                    message: this._state.dialogsPage.newMessage
                }
            ;
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._callSubscriber();
        }
        else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessage = action.newText;
            this._callSubscriber();
        }
    }


};


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE, newText: text});


export default store;
window.store = store;