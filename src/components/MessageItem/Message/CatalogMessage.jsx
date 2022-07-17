import React from "react";
import CatalogComponent from '../CatalogComponent/CatalogComponent'

function CatalogMessage(props) {
    const CatalogElement = props.messageData
        .map(props => <CatalogComponent name={props.name} userId={props.userId} lastMessage={props.lastMessage} />)

    return (
        <>
            { CatalogElement }
        </>
    );
}   

export default CatalogMessage;