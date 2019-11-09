import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c66c6192-39fb-4214-895d-b0ba5142f839'
    }

});


export const userApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {}).then(response => response.data);
    },

    userUnfollow(userId) {
        return instance.delete(`follow/${userId}`, {}).then(response => response.data)
    },
    userFollow(userId) {
        return instance.post(`follow/${userId}`, {}, {}).then(response => response.data)
    },

    getUserProfile(userId) {
        return profileApi.getUserProfile(userId)
    },

    getAuthMe() {
        return instance.get(`auth/me`, {}).then(response => response.data)
    }

};

export const profileApi = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId).then(response => response.data)
    },
    putStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    }
};

export const loginApi = {

    doLogin(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    doExit() {
        debugger
        return instance.delete(`auth/login`).then(response => response.data)
    }

};