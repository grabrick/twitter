import React from "react";
import DialogComponent from '../Message/MessageDialog/DialogComponent/DialogComponent';
import { useSelector } from 'react-redux'

function DialogMessage() {
    const dialogs = useSelector(state => state.message.messageDialog)
    const DialogElement = dialogs
        .map(dialogs =>  <DialogComponent message={dialogs.message} />)

    return (
        <>
            { DialogElement }   
        </>
    );
}

export default DialogMessage;