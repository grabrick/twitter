import React from 'react';
import './Main.css'
import profile from '../../images/profile.svg'

function Main() {
    return(
        <section className='main'>
            <div className='main__container'>
                <div className="main__header">
                    <h3 className="main__name">Home</h3>
                    <div className='main__stars' />
                </div>
                <div className='main__tweet'>
                    <div className='main__tweet_wrapper'>
                        <div className='main__tweet_wrap'>
                            <img className='main__tweet_avatar-profile' src={profile} alt='avatar' />
                            <input className='main__tweet_title' placeholder='What’s happening?' />
                        </div>
                        <div className='main__tweet_wrapper-button'>
                            <div className='main__tweet-button'>
                                <div className='main__tweet_button-img'></div>
                                <div className='main__tweet_button-gif'></div>
                                <div className='main__tweet_button-emoji'></div>
                            </div>
                            <button className='main__tweet_button-tweet'>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main