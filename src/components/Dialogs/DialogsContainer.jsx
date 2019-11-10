import React from 'react';
import {addMessage, changeNewMessage, setUserProfile} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class  DialogsContainer extends React.Component{

    componentDidMount() {
 /*       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
*/    }

    render() {
/*
        if(!this.props.isAuth)
            return <Redirect to='/Login' />
*/

        return <Dialogs {...this.props} profile={this.props.profile} />
    }
}


let mapStateToProps = (state) => {
    return {
        newMessage: state.dialogsPage.newMessage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        profile: state.dialogsPage.profile,
        isAuth: state.auth.isAuth
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

//export default connect(mapStateToProps, {addMessage, changeNewMessage, setUserProfile})(withAuthRedirect(DialogsContainer));

export default compose (
    connect(mapStateToProps, {addMessage, setUserProfile}),
    withAuthRedirect
)(DialogsContainer);