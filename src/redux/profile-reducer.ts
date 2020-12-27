import {PostType, ProfileType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE"

type ActionsType = AddPostACType |
    UpdateNewPostTextACType |
    setUserProfileACType

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: "11"},
        {id: 2, message: "It/'s my first post", likesCount: "20"},
        {id: 3, message: "Hi", likesCount: "35"},
        {id: 4, message: "Yo", likesCount: "2"},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
}

const profileReducer = (state: ProfileType  = initialState, action: ActionsType):ProfileType => {
    switch (action.type) {
        case ADD_POST:{
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: '0',
            }
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

type AddPostACType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type setUserProfileACType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType
}
export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const setUserProfile = (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile }as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}as const)

export default profileReducer;