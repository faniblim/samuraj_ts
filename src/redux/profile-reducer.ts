import {profileAPI, usersAPI} from "../api/api";

export type ProfileType = {
    posts: Array<PostType>;
    profile: any
    status: string
}
export type PostType = {
    id: number;
    message: any;
    likesCount: string;
}
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"

type ActionsType = AddPostACType |
    setUserProfileACType |
    setStatusACType |
    deletePostType

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: "11"},
        {id: 2, message: "It/'s my first post", likesCount: "20"},
        {id: 3, message: "Hi", likesCount: "35"},
        {id: 4, message: "Yo", likesCount: "2"},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state: ProfileType = initialState, action: ActionsType): ProfileType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: '0',
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        default:
            return state;
    }
}

type AddPostACType = {
    type: 'ADD-POST'
    newPostText: string
}
type setUserProfileACType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType
}
type setStatusACType = {
    type: 'SET_STATUS'
    status: string
}
type deletePostType = {
    type: 'DELETE_POST'
    postId: number
}
export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const);
export const deletePost = (postId: number) => ({type: DELETE_POST, postId});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    debugger;
    dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if ((response.data.resultCode === 0)) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;