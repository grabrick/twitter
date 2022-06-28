import React from 'react';
import Nav from '../../Nav/Nav'
// import News from '../../News/News'
import MessagesCatalog from '../../Message/MessageCatalog';
import MessageMain from '../../Message/MessageMain/MessageMain';

function Message() {
    return(
        <>
            <Nav />
            <MessagesCatalog />
            <MessageMain />
        </>
    )
}

export default Message