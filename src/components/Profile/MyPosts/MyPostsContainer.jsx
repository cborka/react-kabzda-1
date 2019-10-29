import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let store = props.store;
    let state = store.getState();
    let posts = state.profilePage.posts;
    let newPostText = state.profilePage.newPostText;

    let addPost = () => {
        store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        store.dispatch(updateNewPostActionCreator(text));
    };

    return <MyPosts newPostText={newPostText} posts={posts} addPost={addPost} updateNewPost={onPostChange} />
};

export default MyPostsContainer;