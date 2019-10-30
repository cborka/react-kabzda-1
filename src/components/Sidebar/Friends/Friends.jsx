import React from "react";
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friends = props.friends.map((f) =>
        <Friend name={f.name} avatarURL={f.avatarURL} />
    );

    return (
        <div>
            <h3>Верные друзья</h3>
            <div className={s.friends}>{friends}</div>
        </div>
    )
};

export default Friends;