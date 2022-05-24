import React from "react";
import TweetAvatar from '../../images/Tweet__avatar.svg';
import TweetImage from '../../images/Tweet__image.svg'

function Tweet() {
    return(
        <div className="tweet">
            <div className="tweet__header">
                <div className="tweet__header_element">
                    <img src={TweetAvatar} alt="avatar" className="tweet__header_img" />
                    <div className="tweet__header_element-text">
                        <p className="tweet__header_element-title">Devon Lane <span>@johndue &middot;</span><span id="tweet__time">20s</span></p>
                        <p className="tweet__header_element-subtitle">Tom is in a big hurry.</p>
                    </div>
                </div>
            </div>

            <div className="tweet__element_img">
                <img src={TweetImage} alt="img" className="tweet__image" />
            </div>

            <div className="tweet__element_btn">
                <div className="tweet__element-feed_btn">
                    <button className="tweet__element-feed_commit"></button>
                </div>

                <div className="tweet__element-feed_btn">
                    <button className="tweet__element-feed_retweet"></button>
                </div>

                <div className="tweet__element-feed_btn">
                    <button className="tweet__element-feed_like"></button>
                </div>

                <div className="tweet__element-feed_btn">
                    <button className="tweet__element-feed_share"></button>
                </div>
            </div>
        </div>
    )
}

export default Tweet 