import {usersAPI} from "../api/api";
import {isNumber} from "util";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any

}

type ActionsType =
    followACType |
    unFollowACType |
    setUsersACType |
    setCarrentPageACType |
    setUsersTotalCountACType |
    setToggleIsFetchingACType |
    toggleFollowingProgressType

// let initialState: UsersType = {
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const userReducer = (state: UsersType = initialState, action: ActionsType) => {
    //const userReducer = (state: UsersType, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter((id: number) => id != action.userId)]
            }
        }
        default:
            return state;
    }
}


type followACType = {
    type: 'FOLLOW'
    userId: number
}
type unFollowACType = {
    type: 'UNFOLLOW'
    userId: number
}
type setUsersACType = {
    type: 'SET-USERS'
    users: Array<UserType>
}
type setCarrentPageACType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type setUsersTotalCountACType = {
    type: 'SET_TOTAL_USERS_COUNT'
    count: number
}
type setToggleIsFetchingACType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
type toggleFollowingProgressType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: number

}

export const followSuccess = (userId: number): followACType => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number): unFollowACType => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>): setUsersACType => ({type: SET_USERS, users} as const)
export const setCarrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount} as const);
export const setToggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const);
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const);

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setToggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
}
export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then((response: any) => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then((response: any) => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}


export default userReducer;