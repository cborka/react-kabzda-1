import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {doLogin} from "../../redux/auth-reduser";
import {required} from "../utils/validators";
import {Input} from "../common/FormsControls/FormsControls";
import styles from './../../components/common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                       validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>Remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>

        </form>
    )
};
const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.doLogin(formData.email, formData.password, formData.rememberMe);
    };

    return (
        <div>
            <h1>Login page</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

/*class LoginContainer extends React.Component {

    render() {

        return (
            <div>
            <h1>Login page</h1>
            <div>xxxxxxxxxxxxxxxxxxxxxxx</div>
                <Login />
            </div>
        )
    }
}*/

/*let Login = (props) => {
    return (
        <div>
            <h1>Login page</h1>
            <div>xxxxxxxxxxxxxxxxxxxxxxx</div>
        </div>
    )
}*/;


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

//export default Login;
export default connect(mapStateToProps, {doLogin})(Login);
