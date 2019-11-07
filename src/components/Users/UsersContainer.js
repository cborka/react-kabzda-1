import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/users-reduser";
import Users from "./Users";
import Fetching from "../common/Fetching/Fetching";
import {compose} from "redux";

class UserContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length == 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
            /*           this.props.setIsFetching(true);
                       userApi.getUsers (this.props.currentPage, this.props.pageSize)
                           .then(data => {
                           this.props.setIsFetching(false);
                           this.props.setUsers(data.items);
                           this.props.setTotalUsersCount(data.totalCount);
                       });
           */
        }
    }

    onPageChanged(pageNumber) {
//        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);

        /*
                this.props.setIsFetching(true);
                userApi.getUsers (pageNumber, this.props.pageSize)
                    .then(data => {
                     this.props.setIsFetching(false);
                    this.props.setUsers(data.items);
                });
        */
    }

    render() {

        if (this.props.isFetching) {
            return <Fetching/>
        }

        return <Users
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            onPageChanged={this.onPageChanged.bind(this)}
            followingInProgress={this.props.followingInProgress}
            //            toggleFollowingInProgress = {this.props.toggleFollowingInProgress}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
//        isFetching:state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
};

/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId));},
        unfollow: (userId) => {dispatch(unfollowAC(userId));},
        setUsers: (users) => { dispatch(setUsersAC(users)); },
        setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)); },
        setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCountAC(totalUsersCount)); },
        setIsFetching: (isFetching) => { dispatch(setIsFetchingAC(isFetching)); }
    }
};
*/


/*
export default connect(mapStateToProps, {
    follow,
    unfollow,
//    setUsers,
//    setCurrentPage,
//    setTotalUsersCount,
//    setIsFetching,
//    toggleFollowingInProgress,
    getUsers

})(UserContainer);

*/

export default compose (
    connect(mapStateToProps, {follow,unfollow, getUsers})
)(UserContainer)