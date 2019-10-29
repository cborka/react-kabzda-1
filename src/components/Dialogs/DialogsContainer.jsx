import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let store = props.store;
    let state = store.getState();
    let dialogs = state.dialogsPage.dialogs;
    let messages = state.dialogsPage.messages;
    let newMessage = state.dialogsPage.newMessage;

    let addMessage = () => {
        store.dispatch(addMessageActionCreator());
    };

    let changeNewMessage = (text) => {
        store.dispatch(updateNewMessageActionCreator(text));
    };

    return <Dialogs newMessage={newMessage} dialogs={dialogs}  messages={messages} addMessage={addMessage} changeNewMessage={changeNewMessage}/>
};

export default DialogsContainer;