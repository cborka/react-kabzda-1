import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {getUserAuthInfo} from "../../redux/auth-reduser";

class HeaderContainer extends React.Component {
    componentDidMount() {
//        {"data":{"id":5043,"login":"cborka","email":"cborka@mail.ru"},"messages":[],"resultCode":0}
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {

            if (response.data.resultCode === 0) {
                 this.props.getUserAuthInfo(response.data.data.id, response.data.data.login, response.data.data.email);
            }
        });


    }

    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getUserAuthInfo})(HeaderContainer);