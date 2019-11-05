import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

     let dialogsElements = props.dialogs.map(
        (d) => <DialogItem name={d.name} id={d.id} avatarURL={d.avatarURL}/>
    );
    let messagesElements = props.messages.map(
        (m) => <Message message={m.message}/>
    );

    let onMessageAdd = () => {
        props.addMessage();
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.changeNewMessage(text);
    };

/*
    let img = 'Тут будет фото';
    if(props.profile)
        img = <img src={props.profile.photos.large} />;
*/
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onNewMessageChange} value={props.newMessage}/>
                </div>
                <div>
                    <button onClick={onMessageAdd}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;