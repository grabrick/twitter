import React, { useState } from "react";
import { useSelector } from "react-redux";
import '../NewsItem/News/News.css'
import loupe from '../../images/loops.svg'
import NewsComponent from "./News/NewsComponent/NewsComponent";
import { useEffect } from "react";
// import News from "./News/News";


function NewsItem() {
    const news = useSelector(state => state.news.newsData)
    const [searchQuery, setSearchQuery] = useState('')

    const filterNews = (searchText, listOfText) => {
        if(!searchText) {
            return listOfText
        }
        return listOfText.filter(({subtitle}) => {
            return subtitle.toLowerCase().includes(searchText.toLowerCase())
        })
    }

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const Filter = filterNews(searchQuery);
            setSearchQuery( Filter)
        }, 300)

        return () => clearTimeout(Debounce)
    }, [searchQuery])

    return(
    <section className="News">
        <div className="News__search-bar">
            <img src={loupe} alt="loupe" className="News__img" />
            <input type="text" className="News__search" placeholder="Search Twitter" value={searchQuery} required onChange={e => console.log(e.target.value)} />
        </div>
        <div className="News__popular-info">
            <h1 className="News__popular-title">Trends for you</h1>
            <div className="News__popular-wrapper">
                {news.map(news => {
                    return <NewsComponent title={news.title} subtitle={news.subtitle} tags={news.tags}/>
                })}
                {/* <News /> */}
            </div>
        </div>
    </section>
    )
}

export default NewsItem