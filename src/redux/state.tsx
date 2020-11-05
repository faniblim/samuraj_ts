import {rerenderEntiereTree} from "../render";

export type FriendsType = {
    friends: Array<FriendType>;
}

export type FriendType = {
    id: number;
    name: string;
    friendCount: string;
}

export type Statetype = {
    profilePage: ProfileType;
    dialogsPage: DialogType;
    sidebar: FriendsType;
}

export type ProfileType = {
    posts: Array<NewPostType>;
    newPostText: string
}

export type DialogItemType = {
    id: number;
    name: string;

}

export type MessageType = {
    id: number;
    message: string;
}
export type DialogType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}


let state: Statetype = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: "11"},
            {id: 2, message: "It/'s my first post", likesCount: "20"},
            {id: 3, message: "Hi", likesCount: "35"},
            {id: 4, message: "Yo", likesCount: "2"},
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Tana"},
            {id: 2, name: "Semion"},
            {id: 3, name: "Anastasja"},
            {id: 4, name: "Nik"},
        ],
        messages: [
            {id: 1, message: "How are you?"},
            {id: 2, message: "Hi"},
            {id: 3, message: "(^*.*^)"},
            {id: 4, message: "Yo"},
        ],
        newMessageText: "((^-.-^))"
    },
    sidebar: {
        friends: [
            {id: 1, name: "Natasha", friendCount: "friends72"},
            {id: 2, name: "Andrey", friendCount: "friends56"},
            {id: 3, name: "Alla", friendCount: "friends84"}
        ]
    }
}

export type NewPostType = {
    id: number;
    message: any;
    likesCount: string;
}


//@ts-ignore
window.state=state;

export let addPost = () => {
    let newPost: NewPostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: '0',
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntiereTree(state);
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntiereTree(state);
}


export type NewMessageType = {
    id: number;
    message: any;
}

export let addMessage = () => {
    let newMessage: NewMessageType = {
        id: 5,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntiereTree(state);
}


export let updateNewMessageText = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntiereTree(state);
}





export default state;