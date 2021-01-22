import profileReducer from "./profile-reducer";
import { addPostActionCreator, deletePost } from "./profile-reducer";


// 1.test data
let state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "11" },
        { id: 2, message: "It/'s my first post", likesCount: "20" },
        { id: 3, message: "(^*.*^)", likesCount: "35" },
        { id: 4, message: "Yo", likesCount: "2" },
    ],
};


it("length of posts should be incremented", () => {
    let action = addPostActionCreator("it=kamasutra.com");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it("message of new posts should be correct", () => {
    let action = addPostActionCreator("it=kamasutra.com");
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("it=kamasutra.com");
});

it("after deleting length of messages should be decrement", () => {
    let action =deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it("after dedeting length should be decrement if id is incorrect", () => {
    let action =deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

