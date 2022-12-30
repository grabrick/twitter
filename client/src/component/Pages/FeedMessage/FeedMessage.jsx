import React from 'react';
import Nav from '../../Nav/Nav'
import MessagesCatalog from '../../MessageItem/Message/MessageCatalog/MessageCatalog';
import MessageDialog from '../../MessageItem/Message/MessageDialog/MessageDialog';

function FeedMessage() {
    return (
      <>
        <>
          <Nav classHome={`${"nav__inactive"}`} classMessage={`${"nav__active"}`} classProfile={`${"nav__inactive"}`} classFriends={`${"nav__inactive"}`} />
        </>
        <>
          <MessagesCatalog />
          <MessageDialog />
        </>
      </>
    );
}

export default FeedMessage