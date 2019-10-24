import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqslqR7KhP2L_DY0O7RGRqJLSoKrWoxMLYa1HfMZSvClkZ5sc"></img>
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )

};

export default Post;