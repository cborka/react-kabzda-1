import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import StoreContext from "../../../CreateContext";

const MyPostsContainer = (props) => {

/*
    let store = props.store;
    let state = store.getState();
    let posts = state.profilePage.posts;
    let newPostText = state.profilePage.newPostText;
*/


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostActionCreator(text));
                    };

                    return (<MyPosts
                        newPostText={state.profilePage.newPostText}
                        posts={state.profilePage.posts}
                        addPost={addPost}
                        updateNewPost={onPostChange}
                    />)
                }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;