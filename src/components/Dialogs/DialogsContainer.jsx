import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../CreateContext";

const DialogsContainer = (props) => {

    /*
        let store = props.store;
        let state = store.getState();
        let dialogs = state.dialogsPage.dialogs;
        let messages = state.dialogsPage.messages;
        let newMessage = state.dialogsPage.newMessage;
    */

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    };

                    let changeNewMessage = (text) => {
                        store.dispatch(updateNewMessageActionCreator(text));
                    };

                    return (<Dialogs
                        newMessage={state.dialogsPage.newMessage}
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        addMessage={addMessage}
                        changeNewMessage={changeNewMessage}
                    />)
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;