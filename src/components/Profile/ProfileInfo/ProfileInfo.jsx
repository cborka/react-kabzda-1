import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    let img = <div>Идет работа...<br/>Тут будет фото</div>;
    if (!props.profile)
        return (
            <div className={s.profileInfo}>
                <div>
                    <img src='https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg'></img>
                </div>

                <div className={s.descriptionBlock}>

                    <img className={s.ava}
                         src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTS7LFEGuHZFKOc_AtQudyknAdpG1PtpKDX-81XeaB_6xJstKD'></img>

                </div>
            </div>
        );


    return (
        <div className={s.profileInfo}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg'></img>
            </div>

            <div className={s.descriptionBlock}>

                <img className={s.ava} src={props.profile.photos.small}/>
                <div>Обо мне: {props.profile.aboutMe}</div>
                <div>Звать меня: {props.profile.fullName}</div>
                <div>Мой ВК: {props.profile.contacts.vk}</div>



                {/*
{
  "aboutMe": "я круто чувак 1001%",
  "contacts": {
    "facebook": "facebook.com",
    "website": null,
    "vk": "vk.com/dimych",
    "twitter": "https://twitter.com/@sdf",
    "instagram": "instagra.com/sds",
    "youtube": null,
    "github": "github.com",
    "mainLink": null
  },
  "lookingForAJob": true,
  "lookingForAJobDescription": "не ищу, а дурачусь",
  "fullName": "samurai d new name",
  "userId": 2,
  "photos": {
    "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
    "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
  }
}
                <img className={s.ava}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTS7LFEGuHZFKOc_AtQudyknAdpG1PtpKDX-81XeaB_6xJstKD'></img>
*/}
            </div>
        </div>
    )

};

export default ProfileInfo;