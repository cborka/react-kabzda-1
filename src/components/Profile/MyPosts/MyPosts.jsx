import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.post}>
            <textarea></textarea>
            <button>Add post</button>

            <Post message='Как дела' like='15'/>
            <Post message='Хорошо!' like='25' />
            <Post message='Hello all!'/>
            <Post />
            <Post />
        </div>
     )

};

export default MyPosts;