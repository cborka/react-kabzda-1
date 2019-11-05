import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reduser";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {

   componentDidMount() {
       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
           this.props.getUserProfile(response.data);
       });

    }

   render() {
       debugger
       return <Profile {...this.props} profile={this.props.profile} />
   }

}

let mapDispatchToProps = (state) =>({
    profile: state.profilePage.profile

});

export default connect(mapDispatchToProps, {getUserProfile})(ProfileContainer);