import React, {FC} from "react";
import './News.css'
import NewsComponent from "./NewsComponent/NewsComponent";
import { useAppSelector } from "../../../hooks/redux.hook";
import { newsItem } from "../../../types/types";
 
const News: FC<newsItem> = () => {
    const news = useAppSelector(state => state.news.newsData)
    let newsElement = news.map(news => <NewsComponent title={news.title} subtitle={news.subtitle} tags={news.tags}/>)

    return(
        <>
            { newsElement }
        </>
    )
}

export default News