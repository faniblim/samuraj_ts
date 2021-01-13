import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch: (action: any) => void
}

export type StateType = {
    profilePage: ProfileType;
    dialogsPage: DialogType;
    sidebar: FriendsType;
}
type ProfileType = {
    posts: Array<PostType>;
    profile: any
    status: string
}
type PostType = {
    id: number;
    message: any;
    likesCount: string;
}


export type MessageType = {
    id: number;
    message: string;
}

export type DialogType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
export type DialogItemType = {
    id: number;
    name: string;
}

export type FriendsType = {
    friends: Array<FriendType>;
    newFriend: string;
}
export type FriendType = {
    id: number;
    name: any;
    friendCount: string;
}

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: "11"},
                {id: 2, message: "It/'s my first post", likesCount: "20"},
                {id: 3, message: "Hi", likesCount: "35"},
                {id: 4, message: "Yo", likesCount: "2"},
            ],
            newPostText: 'it-kamasutra.com',
            photo: null,
            status: "",

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
            // newMessageText: "((^-.-^))"
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: "Natasha", friendCount: "friends72"},
                {id: 2, name: "Andrey", friendCount: "friends56"},
                {id: 3, name: "Alla", friendCount: "friends84"}
            ],
            newFriend: "((^-.-^))"
        }
    },
    _callSubscriber(state: StateType) {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {

        // this._state.profilePage = profileReducer(this._state.profilePage, action);
        // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        //
        // this._callSubscriber(this._state);
    }
}

export default store;
//@ts-ignore
window.store = store;
