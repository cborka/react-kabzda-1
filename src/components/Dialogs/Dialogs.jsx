import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {createMaxLenghtValidator, required} from "../utils/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(
        (d) => <DialogItem name={d.name} id={d.id} avatarURL={d.avatarURL}/>
    );
    let messagesElements = props.messages.map(
        (m) => <Message message={m.message}/>
    );

    let onMessageAdd = (formData) => {
//        alert(formData.newMessageText);
        props.addMessage(formData.newMessageText);
    };

    /*
        let img = 'Тут будет фото';
        if(props.profile)
            img = <img src={props.profile.photos.large} />;
    */
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <div>
                    {dialogsElements}
                </div>
                <div>
                    <NewMessageReduxForm onSubmit={onMessageAdd}/>
                </div>
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
        </div>
    );
};

const maxLength15 = createMaxLenghtValidator(15);

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Insert new message...'} name={'newMessageText'} component={Textarea}
                       validate={[required, maxLength15]}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>

    )
};

const NewMessageReduxForm = reduxForm({form: 'newMessageForm'})(NewMessageForm);

export default Dialogs;