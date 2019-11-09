import React from "react";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, putStatus} from "../../redux/profile-reduser";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

   componentDidMount() {
       let userId = this.props.match.params.userId;
       if(!userId) {
           userId = 5043;
       }
       /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)*/
       this.props.getUserProfile(userId);
       this.props.getUserStatus(userId);
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

       return <Profile {...this.props} profile={this.props.profile}  status={this.props.status}   putStatus={this.props.putStatus}/>
   }

}


let mapDispatchToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status

});

/*
let ComponentWithURLDataProfilerContainer = withRouter(ProfileContainer);
export default connect(mapDispatchToProps, {getUserProfile})(withAuthRedirect(withRouter(ProfileContainer)));
*/

export default compose (
    connect(mapDispatchToProps, {getUserProfile, getUserStatus, putStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer);