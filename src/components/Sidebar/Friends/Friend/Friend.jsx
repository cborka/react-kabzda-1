import React from "react";
import s from './Friend.module.css';

const Friend = (props) => {


    return (
        <div className={s.friend}>
            <div>
            <img src={props.avatarURL} />
            </div>
            <div>
                {props.name}
            </div>

        </div>
    )
};

export default Friend;