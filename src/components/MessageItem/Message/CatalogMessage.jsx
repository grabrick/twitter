import React from "react";
import CatalogComponent from '../CatalogComponent/CatalogComponent'
import { useSelector } from 'react-redux'

function CatalogMessage() {
    const catalog= useSelector(state => state.message.messageCatalog)
    const CatalogElement = catalog
        .map(catalog => <CatalogComponent name={catalog.name} userId={catalog.userId} lastMessage={catalog.lastMessage} />)

    return (
        <>
            { CatalogElement }
        </>
    );
}

export default CatalogMessage;