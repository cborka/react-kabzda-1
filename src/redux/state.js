import {rerenderEntireTree} from "../render";

let state = {
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

};

export let addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
};

export let addMessage = () => {
    let newMessage = {
            id: 7,
            message: state.dialogsPage.newMessage
        }
    ;
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    rerenderEntireTree(state);
};

export let updateNewMessage = (text) => {
   state.dialogsPage.newMessage = text;
   rerenderEntireTree(state);
};


export default state;