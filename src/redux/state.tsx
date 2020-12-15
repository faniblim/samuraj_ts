const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_FRIEND = 'ADD-FRIEND';
const UPDATE_NEW_FRIEND = 'UPDATE-NEW-FRIEND';
export type StoreType = {
    _state: Statetype
    _callSubscriber: (state: Statetype) => void
    getState: () => Statetype
    subscribe: (observer: any) => void
    // dispatch: any
    dispatch: (action: any) => void
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
export type NewPostType = {
    id: number;
    message: any;
    likesCount: string;
}
export type DialogItemType = {
    id: number;
    name: string;
    updateNewPostText?: (newText: string) => void//?
}

export type MessageType = {
    id: number;
    message: string;
}
export type DialogType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
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

let store: StoreType = {
    _state: {
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
    _callSubscriber(state: Statetype) {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost: NewPostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: '0',
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            // let body: NewMessageType = {
            //     id: 5,
            //     message: this._state.dialogsPage.newMessageBody,
            // }
            let body = this._state.dialogsPage.newMessageBody;
            // this._state.dialogsPage.messages.push(body);
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_FRIEND) {
            let newFriend: FriendType = {
                id: 5,
                name: this._state.sidebar.newFriend,
                friendCount: "friends83"
            }
            this._state.sidebar.friends.push(newFriend);
            this._state.sidebar.newFriend = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_FRIEND) {
            this._state.sidebar.newFriend = action.newFriend;
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const addFriendActionCreator = () => ({type: ADD_FRIEND})
export const onFriendChangeActionCreator = (text: string) => ({type: UPDATE_NEW_FRIEND, newMessage: text})


export default store;
//@ts-ignore
window.store = store;