import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "11" },
        { id: 2, message: "It/'s my first post", likesCount: "20" },
        { id: 3, message: "(^*.*^)", likesCount: "35" },
        { id: 4, message: "Yo", likesCount: "2" },
      ],
      newPostText: "it-kamasutra.com",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Tana" },
        { id: 2, name: "Semion" },
        { id: 3, name: "Anastasja" },
        { id: 4, name: "Nik" },
      ],
      messages: [
        { id: 1, message: "How are you?" },
        { id: 2, message: "Hi" },
        { id: 3, message: "(^*.*^)" },
        { id: 4, message: "Yo" },
      ],
      // newMessageText: "((^-.-^))",
      newMessageBody: "((^-.-^))",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Natasha", friendCount: "72" },
        { id: 2, name: "Andrey", friendCount: "56" },
        { id: 3, name: "Alla", friendCount: "84" },
      ],
      newFriend: "Jay",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
