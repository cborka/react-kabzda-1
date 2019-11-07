import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    class AuthRedirect extends React.Component {
        render() {
            if (!this.props.isAuth)
                return <Redirect to='/Login'/>;

            return <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsForRedirect, {})(AuthRedirect);
};