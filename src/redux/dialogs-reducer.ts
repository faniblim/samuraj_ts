type MessageType = {
    id: number;
    message: string;
}
type DialogType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
type DialogItemType = {
    id: number;
    name: string;
}
const SEND_MESSAGE = 'SEND-MESSAGE';

type ActionsType = SendMessageACType

let initialState:DialogType ={
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
    }

const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,{id: 6, message: body} ],
            };
        default:
            return state;
    }
}

type SendMessageACType = {
    type: 'SEND-MESSAGE'
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;