import React, { FC } from "react";
import CatalogComponent from './MessageCatalog/CatalogComponent/CatalogComponent'
import { useSelector } from 'react-redux'
import { useAppSelector } from "../../../hooks/redux.hook";
import { IMessage } from "../../../types/types";

const CatalogMessage: FC<IMessage> = () => {
    const catalog= useAppSelector(state => state.message.messageCatalog)
    const CatalogElement = catalog
        .map(catalog => <CatalogComponent name={catalog.name} userId={catalog.userId} lastMessage={catalog.lastMessage} />)

    return (
        <>
            { CatalogElement }
        </>
    );
}

export default CatalogMessage;