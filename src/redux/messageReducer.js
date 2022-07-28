const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'


const initialState = {
    messageDialog: [
        {
            message: 'how are u?',

        }
    ],

    newMessageBody: ''
};

const messageReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageBody: action.body};
        case SEND_MESSAGE:
                let body = state.newMessageBody;
                // state.newMessageBody = '';
                // state.messageDialog.push({ message: body});
            return {
                ...state,
                newMessageBody: '',
                messageDialog: [...state.messageDialog, body]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateMessageTextCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default messageReducer;