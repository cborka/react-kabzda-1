import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reduser";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

   componentDidMount() {
       let userId = this.props.match.params.userId;
       if(!userId) {
           userId = 5043;
       }
       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then((response) => {
           this.props.getUserProfile(response.data);
       });

    }

   render() {
       return <Profile {...this.props} profile={this.props.profile} />
   }

}

let mapDispatchToProps = (state) =>({
    profile: state.profilePage.profile

});

let ComponentWithURLDataProfilerContainer = withRouter(ProfileContainer);

export default connect(mapDispatchToProps, {getUserProfile})(ComponentWithURLDataProfilerContainer);