import {FriendsType, FriendType} from "./store";

const ADD_FRIEND = 'ADD-FRIEND';
const UPDATE_NEW_FRIEND = 'UPDATE-NEW-FRIEND';

type ActionsType = AddFriendACType | OnFriendChangeACType

let initialState = {
    friends: [
        {id: 1, name: "Natasha", friendCount: "friends72"},
        {id: 2, name: "Andrey", friendCount: "friends56"},
        {id: 3, name: "Alla", friendCount: "friends84"}
    ],
    newFriend: "((^-.-^))"
}

const sidebarReducer = (state: FriendsType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_FRIEND:
            let newFriend: FriendType = {
                id: 5,
                name: state.newFriend,
                friendCount: "friends83"
            }
            state.friends.push(newFriend);
            state.newFriend = '';
            return state;
        case UPDATE_NEW_FRIEND:
            state.newFriend = action.newFriend;
            return state;
        default:
            return state;
    }
}

type AddFriendACType = {
    type: 'ADD-FRIEND'
}
type OnFriendChangeACType = {
    type: 'UPDATE-NEW-FRIEND'
    newFriend: string
}

export const addFriendActionCreator = () => ({type: ADD_FRIEND})
export const onFriendChangeActionCreator = (text: string) => ({type: UPDATE_NEW_FRIEND, newMessage: text})

export default sidebarReducer;