import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
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
     )

};

export default ProfileInfo;