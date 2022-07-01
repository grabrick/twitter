import React from "react";
import '../News/News.css'
import loupe from '../../images/loops.svg'
// import News from '../News/News'

function NewsItem(props) {
    return(
    <section className="News">
        <div className="News__search-bar">
            <img src={loupe} alt="loupe" className="News__img" />
            <input type="text" className="News__search" placeholder="Search Twitter" required />
        </div>
        <div className="News__popular-info">
            <h1 className="News__popular-title">What’s happening</h1>
            <div className="News__popular-wrapper">
                <div className="News__popular-element">
                    <p className="News__title" id="News__element-title">{props.title}<span className="News__title-time">&middot; last night</span></p>
                    <p className="News__popular-subtitle">{props.subtitle}</p>
                    <p className="News__tags" id="News__element-tags">Trending with<span className="News__title-tags">{props.tags}</span></p>
                </div>
                <div className="New__popular-img" />
            </div>
        </div>
    </section>
    )
}

export default NewsItem