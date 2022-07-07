import React from "react";
import './News.css'
import NewsComponent from "./NewsComponent/NewsComponent";
 
function News(props) {

    const newsElement = props.newsData
        .map(props => <NewsComponent title={props.title} subtitle={props.subtitle} tags={props.tags} />)

    return(
        <>
            { newsElement }
        </>
    )
}

export default News