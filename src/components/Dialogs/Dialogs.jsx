import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>

    )
};

const Message = (props) => {
    return (
        <div className={s.message}> {props.message} </div>
    )
};


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Boris"},
        {id: 3, name: "Alex"}
    ];

    let messages = [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are you?"},
        {id: 1, message: "Yo"},
        {id: 1, message: "Yo"},
        {id: 1, message: "Yo"}
    ];

    let dialogsElements = dialogs.map(
        (d) => <DialogItem name={d.name} id={d.id}/>
    );
    let messagesElements = messages.map(
        (m) => <Message message={m.message}/>
    );

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;