import dialogReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";
import sidebarReduser from "./sidebar-reduser";

let store = {
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

    _callSubscriber () {
        console.log('store: observer не назначен.');
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState () {
        return this._state;
    },

    dispath (action) {
        this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action);
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.sidebarPage = sidebarReduser(this._state.sidebarPage, action);

        this._callSubscriber();
    }
};

export default store;
window.store = store;