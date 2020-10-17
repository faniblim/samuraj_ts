import {DialogsType} from "../components/Dialogs/Dialogs";
import {ProfileType} from "../components/Profile/Profile";
import {FriendType} from "../components/Sidebar/Friend/Friend";

export type Statetype = {
    profilePage: ProfileType;
    dialogsPage: DialogsType;
    sidebar: {friends:Array<FriendType>};
}

let state: Statetype = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: "11"},
            {id: 2, message: "It/'s my first post", likesCount: "20"},
            {id: 3, message: "Hi", likesCount: "35"},
            {id: 4, message: "Yo", likesCount: "2"},
        ]
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
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Natasha", friendCount: "friends72"},
            {id: 2, name: "Andrey", friendCount: "friends56"},
            {id: 3, name: "Alla", friendCount: "friends84"}
        ]
    }
}

export default state;