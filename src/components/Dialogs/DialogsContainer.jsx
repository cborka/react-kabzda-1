import React from 'react';
import {addMessage, changeNewMessage} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessage: state.dialogsPage.newMessage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        changeNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        }
    }
};*/

const DialogsContainer = connect(mapStateToProps, {addMessage, changeNewMessage})(Dialogs);

export default DialogsContainer;