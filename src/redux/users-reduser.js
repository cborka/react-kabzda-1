import {userApi} from "../api/api";

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initial_state = {
    users: [
        /*
                {id: 1, fotoUrl: 'data:image/jpeg;base64,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',
                    followed: true, fullName: 'Alexandr', status: 'I am Boss', location: {city: 'Moskow', country: 'Russia'}},
                {id: 2,  fotoUrl: 'data:image/jpeg;base64,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',
                    followed: false, fullName: 'Nikolay', status: 'I am Boss too', location: {city: 'Monreal',country: 'Canada'}},
                {id: 3,  fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxI6JHMmw_bK4a8C4ipDGuJx3bpWx2hC2I5_uEM6Q7HVv4Q_zs',
                    followed: true, fullName: 'Lev', status: 'I am Bossss', location: {city: 'Pekin', country: 'China'}}
        */
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] // Здесь массив userId пользователей, у которых нажата кнопка [un]follow

};

let usersReduser = (state = initial_state, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true};
                        }
                        return u;
                    }
                )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false};
                        }
                        return u;
                    }
                )
            };

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };


        default:
            return state;
    }

};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setIsFetching(true));
        userApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
};


export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        userApi.userUnfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    }
};
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        userApi.userFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    }
};



export default usersReduser;