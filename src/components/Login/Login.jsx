import React from 'react';
import {reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>


        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit={onSubmit(formData)}/>
        </div>
    )
};

export default Login;