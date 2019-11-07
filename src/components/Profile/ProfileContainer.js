import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reduser";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

   componentDidMount() {
       let userId = this.props.match.params.userId;
       if(!userId) {
           userId = 5043;
       }
       /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)*/
       this.props.getUserProfile(userId);
/*
       userApi.getUserProfile(userId)
           .then((data) => {
           this.props.getUserProfile(data);
       });
*/

    }

   render() {
/*
       if (!this.props.isAuth)
           return <Redirect to='/Login' />
*/

       return <Profile {...this.props} profile={this.props.profile} />
   }

}


let mapDispatchToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth

});

let ComponentWithURLDataProfilerContainer = withRouter(ProfileContainer);

export default connect(mapDispatchToProps, {getUserProfile})(withAuthRedirect(ComponentWithURLDataProfilerContainer));