import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg'></img>
            </div>

            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5T9mDfy0eWJY8jKLwofob7cPJiKGDLGEy_hJPdVGRki0Y5PMa6g'></img>
            </div>

            <MyPosts/>

        </div>
    )
};

export default Profile;