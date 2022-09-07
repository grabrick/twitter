import React from 'react';
import Nav from '../../Nav/Nav'
import MessagesCatalog from '../../MessageItem/Message/MessageCatalog/MessageCatalog';
import MessageDialog from '../../MessageItem/Message/MessageDialog/MessageDialog';

function FeedMessage() {
    return (
      <>
        <>
          <Nav />
        </>
        <>
          <MessagesCatalog />
          <MessageDialog />
        </>
      </>
    );
}

export default FeedMessage