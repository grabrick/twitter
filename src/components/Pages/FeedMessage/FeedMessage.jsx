import React from 'react';
import Nav from '../../Nav/Nav'
import MessagesCatalog from '../../MessageItem/Message/MessageCatalog/MessageCatalog';
import MessageDialog from '../../MessageItem/Message/MessageDialog/MessageDialog';

function FeedMessage(props) {
    return(
        <>
            <Nav />
            <MessagesCatalog catalogData={props.catalogData}  />
            <MessageDialog dispatch={props.dispatch} dialogData={props.messageData} newMessageBody={props.newMessage.newMessageBody} />
        </>
    )
}

export default FeedMessage