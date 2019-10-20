import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.post}>
            <textarea></textarea>
            <button>Add post</button>

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
     )

};

export default MyPosts;