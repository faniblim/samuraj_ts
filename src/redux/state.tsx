
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
    dialogs: Array<DialogItemType>;
    messages: Array<MessageType>;
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

export type AddPostType = {
    newPost: object;
}

export type NewPostType = {
    id: number;
    message: any;
    likesCount: string;
}

export let addPost = (postMessage: string) => {
    let newPost: NewPostType = {
        id: 5,
        message: postMessage,
        likesCount: '0',
    }
    state.profilePage.posts.push(newPost);

}

export default state;