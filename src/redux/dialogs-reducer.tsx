const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
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
  // newMessageBody: "((^-.-^))",
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body
      };
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 5, message: body }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
