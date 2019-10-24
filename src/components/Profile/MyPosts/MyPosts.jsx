import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, post: "Как дела", likeCount: 5} ,
        {id: 1, post: "Хорошо!", likeCount: 15} ,
        {id: 1, post: "Hello all!", likeCount: 25}
    ];

let postsElements = posts.map (
    (p) => <Post message={p.post} like={p.likeCount}/>
);
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

};

export default MyPosts;