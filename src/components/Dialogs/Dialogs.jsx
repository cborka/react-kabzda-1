import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reduser";

const Dialogs = (props) => {

     let dialogsElements = props.dialogsPage.dialogs.map(
        (d) => <DialogItem name={d.name} id={d.id} avatarURL={d.avatarURL}/>
    );
    let messagesElements = props.dialogsPage.messages.map(
        (m) => <Message message={m.message}/>
    );

    let newMessageElement = React.createRef();

    let onMessageAdd = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onNewMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    };


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onNewMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessage}/>
                </div>
                <div>
                    <button onClick={onMessageAdd}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;