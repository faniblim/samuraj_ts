import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "d20f2cfd-7cab-429f-a515-e3c7d4a89ddd"}
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => {
            return response.data;
        });
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/` + {status: status});
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: any , password: any, rememberMe = false) {
        return instance.post(`autch/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`autch/login`);
    },
}