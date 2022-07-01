import React from "react";
import '../News/News.css'
import NewsItem from "../NewsItem/NewsItem";
 
function News() {
    const newsItem = [
        {
            title: 'Covid19',
            subtitle: 'England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic',
            tags: ' #Covid19'
        }
    ]

    const newsElement = newsItem
        .map(news => <NewsItem title={news.title} subtitle={news.subtitle} tags={news.tags} />)

    return(
        <>
            { newsElement }
        </>
    )
}

export default News