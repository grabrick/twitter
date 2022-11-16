import {FC} from "react";
import DialogComponent from './MessageDialog/DialogComponent/DialogComponent';
// import { useSelector } from 'react-redux'
import { useAppSelector } from "../../../hooks/redux.hook";
import { IMessage } from "../../../types/types";

const DialogMessage: FC<IMessage> = () => {
    const dialogs = useAppSelector(state => state.message.messageDialog)
    const DialogElement = dialogs.map(dialogs =>  <DialogComponent message={dialogs.message} />)
    console.log(dialogs);
    return (
        <>
            { DialogElement }   
        </>
    );
}

export default DialogMessage;