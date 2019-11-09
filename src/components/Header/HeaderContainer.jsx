import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {doExit, getUserAuthInfo} from "../../redux/auth-reduser";

class HeaderContainer extends React.Component {
    componentDidMount() {
//        {"data":{"id":5043,"login":"cborka","email":"cborka@mail.ru"},"messages":[],"resultCode":0}
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})*/

        this.props.getUserAuthInfo();
/*
        userApi.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.getUserAuthInfo(data.data.id, data.data.login, data.data.email);
                }
            });
*/
    }
    componentDidUpdate() {

//        this.props.getUserAuthInfo();
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

export default connect(mapStateToProps, {getUserAuthInfo, doExit})(HeaderContainer);