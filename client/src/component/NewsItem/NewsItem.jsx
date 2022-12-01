import React from "react";
import '../NewsItem/News/News.css'
import loupe from '../../images/loops.svg'
import News from "./News/News";
import { useSelector } from "react-redux";

const NewsItem = () => {
    const news = useSelector(state => state.news.newsData)

    const moreNews = () => {
        if (news.length >= 7) {
            return (
              <div className="News__popular_more">
                <p className="News__popular_more-text">Show more</p>
              </div>
            );
        }
    }

    return(
    <section className="News">
        <div className="News__search-bar">
            <img src={loupe} alt="loupe" className="News__img" />
            <input type="text" className="News__search" placeholder="Search Twitter" required />
        </div>
        <div className="News__popular-info">
            <h1 className="News__popular-title">Trends for you</h1>
            <div className="News__popular-wrapper">
                <News />
            </div>
                { moreNews() }
        </div>
    </section>
    )
}

export default NewsItem