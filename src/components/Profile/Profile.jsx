import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/state";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>

            <MyPosts
                store={store}
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
            />

        </div>
    )
};

export default Profile;