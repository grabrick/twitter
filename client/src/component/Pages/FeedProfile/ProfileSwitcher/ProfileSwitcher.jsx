import React from 'react';
import Nav from '../../../Nav/Nav'
import NewsItem from '../../../NewsItem/NewsItem';
import ProfileComponent from '../../../Profile/ProfileCompanent/ProfileComponent';

function ProfileSwitcher() {
    return(
        <>
        <Nav />
        <ProfileComponent />
        <NewsItem />
        </>
    )
}

export default ProfileSwitcher