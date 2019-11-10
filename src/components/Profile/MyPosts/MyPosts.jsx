import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {createMaxLenghtValidator, required} from "../../utils/validators";

const MyPosts = (props) => {
    let postsElements = props.posts.map(
        (p) => <Post message={p.post} like={p.likeCount}/>
    );

    let onSubmit = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <NewPostReduxForm onSubmit={onSubmit}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};
const maxLength15 = createMaxLenghtValidator(15);
const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New post text'} name={'newPostText'} component={Textarea}
                       validate={[required, maxLength15]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const NewPostReduxForm = reduxForm({form: "newPostForm"})(NewPostForm);

export default MyPosts;