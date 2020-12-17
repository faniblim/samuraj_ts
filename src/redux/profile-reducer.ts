import {PostType, ProfileType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type ActionsType = AddPostACType | UpdateNewPostTextACType

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: "11"},
        {id: 2, message: "It/'s my first post", likesCount: "20"},
        {id: 3, message: "Hi", likesCount: "35"},
        {id: 4, message: "Yo", likesCount: "2"},
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state: ProfileType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: '0',
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;