import React from "react";
import '../NewsItem/News/News.css'
import loupe from '../../images/loops.svg'
import News from "./News/News";


function NewsItem(props) {
    return(
    <section className="News">
        <div className="News__search-bar">
            <img src={loupe} alt="loupe" className="News__img" />
            <input type="text" className="News__search" placeholder="Search Twitter" required />
        </div>
        <div className="News__popular-info">
            <h1 className="News__popular-title">Trends for you</h1>
            <div className="News__popular-wrapper">
                <News newsData={props.newsData} />
            </div>
        </div>
    </section>
    )
}

export default NewsItem