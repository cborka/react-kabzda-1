import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(
        (p) => <Post message={p.post} like={p.likeCount}/>
    );

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPost(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;