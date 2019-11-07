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
        return instance.get(`profile/` + userId).then(response => response.data)
    },

    getAuthMe() {
        return instance.get(`auth/me`, {}).then(response => response.data)
    }

};
