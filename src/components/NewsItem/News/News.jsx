import React from "react";
import './News.css'
import NewsComponent from "./NewsComponent/NewsComponent";
import { useSelector } from 'react-redux'
 
function News() {
    const news = useSelector(state => state.news.newsData)
    let newsElement = news.map(news => <NewsComponent title={news.title} subtitle={news.subtitle} tags={news.tags}/>)

    return(
        <>
            { newsElement }
        </>
    )
}

export default News