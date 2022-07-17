import React from "react";
import DialogComponent from '../Message/MessageDialog/DialogComponent/DialogComponent';

function DialogMessage(props) {
    const DialogElement = props.dialogData
        .map(props =>  <DialogComponent message={props.message} />)

    return (
        <>
            { DialogElement }   
        </>
    );
}

export default DialogMessage;