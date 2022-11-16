import { PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../types/types";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'


const initialState: IMessage = {
        messageCatalog: [
            {
                name: 'Elena',
                userId: '@fffhrjkc',
                lastMessage: 'Hi',

            }
        ],
        messageDialog: [
            {
                message: '',

            }
        ],
    newMessageBody: ''
};

const messageReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = {
                // message: state.newMessageBody
            };

            return {
                ...state,
                newMessageBody: '',
                // messageDialog: [...state.messageDialog, body],
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageBody: action.body};
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateMessageTextCreator = (body: PayloadAction<string>) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default messageReducer;